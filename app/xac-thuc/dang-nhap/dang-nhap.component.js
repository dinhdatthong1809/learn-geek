import SweetAlertHelper from '../../../assets/js/sweet-alert-helper.js';

export let DangNhapComponent = {
    templateUrl: './app/xac-thuc/dang-nhap/dang-nhap.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller($window, accountService, authenticationService) {
    this.userAuthentication = {
        username: "",
        password: ""
    }

    this.signIn = () => {
        SweetAlertHelper.choXuLy();

        accountService
            .getOne(this.userAuthentication.username)
            .then(
                (doc) => {
                    if (!doc.exists) {
                        SweetAlertHelper.thatBai("Không tồn tại tài khoản này!");
                        return;
                    }

                    let account = doc.data();

                    authenticationService
                        .signIn(account.email, account.password)
                        .then(
                            () => {
                                SweetAlertHelper.thanhCong("Đăng nhập thành công!");
                                $window.location = '/';
                            },
                            (error) => {
                                SweetAlertHelper.thatBai("Sai mật khẩu!");
                                console.log(error);
                            }
                        );
                },
                (error) => {
                    SweetAlertHelper.thatBai("Đăng nhập thất bại!");
                    console.log(error);
                }
            );
    }
}
