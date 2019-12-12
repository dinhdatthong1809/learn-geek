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
        
        for (let i = 0; i < this.quizs.length; i++) {
            if (this.quizs[i].studentAnswer !== undefined) {
                console.log(i, this.quizs[i].studentAnswer);
            }
        }

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
        SweetAlertHelper.thongBao("Bạn đã nộp bài!");
    };

    this.hetGioLamBai = () => {
        SweetAlertHelper.thongBao("Bạn đã hết giờ làm bài!");
    };
}

