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
                    SweetAlertHelper.thatBai("Gửi email thât bại!");
                    console.log(error);
                }
            );
    }
}
