import Account from '../account.model.js';
import SweetAlertHelper from '../../../../assets/js/sweet-alert-helper.js';

export let AccountFormComponent = {
    templateUrl: './app/modules/account-module/account-form/account-form.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller(accountService, authenticationService) {
    this.account = new Account("", "", "", "", true, "", "");
    this.passwordConfirm = "";

    this.signUp = () => {
        authenticationService
            .signUp(this.account.email, this.account.password)
            .then(
                (result) => {
                    return result.user.updateProfile(
                        {
                            displayName: this.account.username
                        }
                    )
                }
            )
            .catch(
                (error) => {
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            SweetAlertHelper.thatBai("Email này đã được sử dụng. Vui lòng chọn email khác.");
                        case 'auth/invalid-email':
                            SweetAlertHelper.thatBai("Email không hợp lệ.");
                        case 'auth/operation-not-allowed':
                            SweetAlertHelper.thatBai("Có lỗi khi đăng ký.");
                        case 'auth/weak-password':
                            SweetAlertHelper.thatBai("Mật khẩu chưa đủ mạnh. Vui lòng thêm cả chữ lẫn số vào mật khẩu.");
                        default:
                            SweetAlertHelper.thatBai("Đăng ký thất bại!");
                            console.log(error);
                    }
                }
            );

        accountService
            .insert(this.account)
            .then(
                () => {
                    SweetAlertHelper.thanhCong("Đăng ký thành công!");
                    this.account = new Account("", "", "", "", true, "", "");
                },
                (error) => {
                    SweetAlertHelper.thatBai("Đăng ký thất bại!");
                    console.log(error);
                }
            );
    }
}
