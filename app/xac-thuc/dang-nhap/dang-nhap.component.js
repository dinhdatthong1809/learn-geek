import SweetAlertHelper from '../../../assets/js/sweet-alert-helper.js';

export let DangNhapComponent = {
    templateUrl: './app/xac-thuc/dang-nhap/dang-nhap.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller(accountService) {
    this.userAuthentication = {
        username: "",
        password: ""
    }

    this.signIn = () => {
        accountService
            .getOne(this.userAuthentication.username)
            .then(
                (doc) => {
                    if (!doc.exists) {
                        SweetAlertHelper.thatBai("Không tồn tại tài khoản này!");
                        return;
                    }

                    let account = doc.data();
                    if (this.userAuthentication.password != account.password) {
                        SweetAlertHelper.thatBai("Sai mật khẩu!");
                        return;
                    }
                    
                    SweetAlertHelper.thanhCong("Đăng nhập thành công!");
                },
                (error) => {
                    SweetAlertHelper.thatBai("Đăng nhập thất bại!");
                    console.log(error);
                }
            );
    }
}
