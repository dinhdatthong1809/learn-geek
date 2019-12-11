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
            $scope.$broadcast('timer-start');
            this.dangLamBai = true;
        }
        else {
            $scope.$broadcast('timer-stop');
            $scope.$broadcast('timer-reset');
            this.dangLamBai = false;
        }
    };

    $scope.$on('timer-stopped', (event, data) => {
        this.nopBai();
    });

    this.btnText = {
        reset: "Bắt đầu làm bài",
        started: "Kết thúc bài làm",
        stopped: "Bắt đầu làm bài"
    };

    this.nopBai = () => {
        SweetAlertHelper.thongBao("Bạn đã nộp bài!");
    };

    this.hetGioLamBai = () => {
        SweetAlertHelper.thongBao("Bạn đã hết giờ làm bài!");
    };
}

