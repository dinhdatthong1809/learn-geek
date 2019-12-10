export let BaiTapTracNghiemComponent = {
    templateUrl: './app/bai-tap-trac-nghiem/bai-tap-trac-nghiem.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        subject: '<',
        quizs: '<'
    }
};

function controller() {
    this.deadline = 0;

    this.$onInit = () => {
        this.deadline = this.quizs.length * 60 * 1000;
    }
}

