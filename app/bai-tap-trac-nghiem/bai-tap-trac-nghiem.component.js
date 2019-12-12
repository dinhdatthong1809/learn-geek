import SweetAlertHelper from '../../assets/js/sweet-alert-helper.js';

export let BaiTapTracNghiemComponent = {
    templateUrl: './app/bai-tap-trac-nghiem/bai-tap-trac-nghiem.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        subject: '<',
        allQuizs: '<',
        quizs: '<',
        deadline: '<'
    }
};

function controller($scope, $transitions) {
    this.dangLamBai = false;

    this.soCauDung = 0;
    this.soCauSai = 0;
    this.soCauChuaLam = 0;

    this.$onInit = () => {
       this.quizs = _.sample(this.allQuizs, 10);
    }

    $transitions.onBefore({from: 'bai-tap-trac-nghiem'}, (trans) => {
        console.log("change");

        if (this.dangLamBai) {
            let hoi = SweetAlertHelper.hoi("Bạn đang trong trạng thái làm bài, bạn muốn hủy bài làm?")
            .then(
                (result) => {
                    if (result.value) {
                        return trans.router.stateService.target(trans.to().name);
                    }

                    return false;
                }
            );
            
            console.log(hoi);

            return hoi;
        }

        return true;
    });

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
        this.resetKetQua();
        this.quizs = _.sample(this.allQuizs, 10);
    });

    this.nopBai = () => {
        let str = "<div class='text-success'>Bạn đã nộp bài!</div><br>";
        SweetAlertHelper.thongBao(str + this.ketQua());
    };

    this.hetGioLamBai = () => {
        let str = "<div class='text-danger'>Đã hết giờ làm bài!</div><br>";
        SweetAlertHelper.canhBao(str + this.ketQua());
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
        ketQua += `<div>Số câu đúng: <span class="font-weight-bold text-success">${this.soCauDung}</span></div>`;
        ketQua += `<div>Số câu sai: <span class="font-weight-bold text-danger">${this.soCauSai}</span></div>`;
        
        if (this.soCauChuaLam > 0) {
            ketQua += `<div>Số câu chưa làm: <span class="font-weight-bold text-dark">${this.soCauChuaLam}</span></div>`;
        }

        return ketQua;
    }

    this.resetKetQua = () => {
        this.soCauDung = 0;
        this.soCauSai = 0;

        // quét mảng và xóa bài làm
        for (let i = 0; i < this.quizs.length; i++) {
            delete this.quizs[i].studentAnswer;
        }
    }
}

