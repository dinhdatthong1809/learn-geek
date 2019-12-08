export let TrangCaNhanComponent = {
    templateUrl: './app/trang-ca-nhan/trang-ca-nhan.component.html',
    controller: controller,
    controllerAs: '$scope',
    binding: {
        account: '<'
    }
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
