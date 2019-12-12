import SweetAlertHelper from '../../assets/js/sweet-alert-helper.js';

export let BaiTapTracNghiemComponent = {
    templateUrl: './app/bai-tap-trac-nghiem/bai-tap-trac-nghiem.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        subject: '<',
        quizs: '<',
        deadline: '<'
    }
};

function controller($scope) {
    this.dangLamBai = false;

    this.soCauDung = 0;
    this.soCauSai = 0;
    this.soCauChuaLam = 0;

    this.lamBai = () => {
        if (this.dangLamBai == false) {
            this.dangLamBai = true;
            $scope.$broadcast('timer-start');
        }
        else {
            this.dangLamBai = false;
            $scope.$broadcast('timer-stop');
        }
    };

    $scope.$on('timer-stopped', (event, data) => {

        this.tinhDiem();

        if (this.dangLamBai) {
            this.dangLamBai = false;
            this.hetGioLamBai();
        }
        else {
            this.nopBai();
        }

        $scope.$broadcast('timer-reset');
    });

    this.nopBai = () => {
        SweetAlertHelper.thongBao("Bạn đã nộp bài!", this.ketQua());
    };

    this.hetGioLamBai = () => {
        SweetAlertHelper.thongBao("Bạn đã hết giờ làm bài!", this.ketQua());
    };

    this.tinhDiem = () => {
        // quét mảng và so sánh câu trả lời để tính điểm và kết quả
        for (let i = 0; i < this.quizs.length; i++) {
            let currentQuiz = this.quizs[i];

            if (currentQuiz.studentAnswer === undefined) {
                continue;
            }
            
            if (currentQuiz.studentAnswer == currentQuiz.AnswerId) {
                this.soCauDung++;
            }
            else {
                this.soCauSai++;
            }
        }

        this.soCauChuaLam = this.quizs.length - this.soCauDung - this.soCauSai;
    }

    this.ketQua = () => {
        let ketQua = '';
        ketQua += `<div>Số câu đúng: <span class="font-weight-bold text-success">${this.soCauDung}</span></div><br>`;
        ketQua += `<div>Số câu sai: <span class="font-weight-bold text-danger">${this.soCauSai}</span></div><br>`;
        ketQua += `<div>Số câu chưa làm: <span class="font-weight-bold text-dark">${this.soCauChuaLam}</span></div>`;

        return ketQua;
    }


}

