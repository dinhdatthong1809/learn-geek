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
                    if (doc.exists) {
                        console.log(doc.data());
                    } else {
                        SweetAlertHelper.thatBai("Không tồn tại tài khoản này!");
                    }
                },
                (error) => {
                    SweetAlertHelper.thatBai("Đăng nhập thất bại!");
                    console.log(error);
                }
            );
    }
}
