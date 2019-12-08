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
        // Thử đăng kí tài khoản mới
        authenticationService
            .signUp(this.account.email, this.account.password)
            .then(
                // nếu đăng ký thành công...
                (result) => {
                    // thì thêm dữ liệu vào database
                    accountService
                        .insert(this.account)
                        .then(
                            // nếu thêm dữ liệu thành công...
                            () => {
                                // thì cập nhật displayName trong tài khoản
                                result.user.updateProfile(
                                    {
                                        displayName: this.account.username
                                    }
                                )
                                .then(
                                    // nếu cập nhật displayName thành công...
                                    () => {
                                        // thì xuất thông báo
                                        SweetAlertHelper.thanhCong("Đăng ký thành công!");
                                        this.account = new Account("", "", "", "", true, "", "");
                                    }
                                );
                            }
                        );
                }
            )
            .catch(
                (error) => {
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            SweetAlertHelper.thatBai("Email này đã được sử dụng. Vui lòng chọn email khác.");
                            break;
                        case 'auth/invalid-email':
                            SweetAlertHelper.thatBai("Email không hợp lệ.");
                            break;
                        case 'auth/operation-not-allowed':
                            SweetAlertHelper.thatBai("Có lỗi khi đăng ký.");
                            break;
                        case 'auth/weak-password':
                            SweetAlertHelper.thatBai("Mật khẩu chưa đủ mạnh. Vui lòng thêm cả chữ lẫn số vào mật khẩu.");
                            break;
                        default:
                            SweetAlertHelper.thatBai("Đăng ký thất bại!");
                            console.log(error);
                    }
                }
            );
    }
}
