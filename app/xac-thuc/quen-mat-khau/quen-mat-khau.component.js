import SweetAlertHelper from '../../../assets/js/sweet-alert-helper.js';

export let QuenMatKhauComponent = {
    templateUrl: './app/xac-thuc/quen-mat-khau/quen-mat-khau.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller(authenticationService) {
    this.email = "";

    this.sendPasswordResetEmail = () => {
        SweetAlertHelper.choXuLy();

        authenticationService
            .sendPasswordResetEmail(this.email)
            .then(
                () => {
                    SweetAlertHelper.thanhCong("Gửi email thành công!");
                }
            )
            .catch(
                (error) => {
                    switch (error.code) {
                        case 'auth/invalid-email':
                            SweetAlertHelper.thatBai("Email không hợp lệ.");
                            break;
                        case 'auth/user-not-found':
                            SweetAlertHelper.thatBai("Không tồn tại tài khoản có email này.");
                            break;
                        default:
                            SweetAlertHelper.thatBai("Gửi email thât bại!");
                            console.log(error);
                    }
                }
            );
    }
}
