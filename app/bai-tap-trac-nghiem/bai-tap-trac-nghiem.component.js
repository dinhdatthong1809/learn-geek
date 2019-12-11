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
            this.dangLamBai = false;
        }
    };

    $scope.$on('timer-stopped', (event, data) => {
        
        if (this.deadline == 0) {
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

