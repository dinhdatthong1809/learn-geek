export let DangKyComponent = {
    templateUrl: './app/dang-ky/dang-ky.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller() {
    this.account = {
        username: "",
        password: "",
        fullName: "",
        email: "",
        gender: true,
        phoneNumber: ""
    };
}
