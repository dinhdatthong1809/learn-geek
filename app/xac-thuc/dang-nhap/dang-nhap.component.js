export let DangNhapComponent = {
    templateUrl: './app/xac-thuc/dang-nhap/dang-nhap.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller() {
    this.userAuthentication = {
        username: "",
        password: ""
    }

}
