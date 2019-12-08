export let TrangCaNhanComponent = {
    templateUrl: './app/trang-ca-nhan/trang-ca-nhan.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller($rootScope) {
    this.account = {
        username: "",
        password: "",
        fullName: "",
        email: "",
        gender: true,
        phoneNumber: ""
    };

    
    this.username = $rootScope.account.username;
}
