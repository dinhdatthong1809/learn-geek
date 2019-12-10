import Account from '../account.model.js';
import SweetAlertHelper from '../../../../assets/js/sweet-alert-helper.js';

export let AccountFormComponent = {
    templateUrl: './app/modules/account-module/account-form/account-form.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        state: '<',
        account: '<'
    }
};

function controller($window, accountService, authenticationService) {
    this.REGISTER_STATE = 1;
    this.UPDATE_STATE = 2;

    this.passwordConfirm = "";

    // for changing password
    this.oldPassword = "";
    this.newPassword = "";

    this.dataForReset;

    this.$onInit = () => {
        this.dataForReset = JSON.parse(JSON.stringify(this.account));

        if (this.state == this.REGISTER_STATE) {
            this.btnName = "Đăng ký";
            this.labelColorClass = "text-white";
        }
        else if (this.state == this.UPDATE_STATE) {
            this.btnName = "Lưu thông tin";
            this.labelColorClass = "text-dark";
            this.passwordConfirm = "";
        }
        else {

        }
    }

    this.submitForm = () => {
        if (this.state == this.REGISTER_STATE) {
            this.signUp();
        }
        else if (this.state == this.UPDATE_STATE) {
            this.update();
        }
        else {

        }
    }

    this.submitFormChangePassword = async () => {
        if (this.formChangePassword.$valid == false) {
            SweetAlertHelper.thatBai("Bạn vui lòng nhập chính xác các thông tin");
            return;
        }

        SweetAlertHelper.choXuLy();

        let currentUser = await authenticationService.isAuthenticated();

        if (currentUser == null) {
            SweetAlertHelper.thatBai("Phiên người dùng của bạn đã hết hạn. Vui lòng đăng nhập lại!");
            $window.location = "/";
            return;
        }

        let account;

        let username = currentUser.displayName;
        // Kiểm tra mật khẩu cũ
        accountService
            .getOne(username)
            .then(
                (doc) => {
                    account = doc.data();

                    console.log(this.oldPassword != account.password);
                    console.log(account.password);

                    if (this.oldPassword != account.password) {
                        SweetAlertHelper.thatBai("Mật khẩu cũ không chính xác!");
                        return;
                    }

                    account.password = this.newPassword;

                    accountService
                        .update(account)
                        .then(
                            () => {
                                currentUser
                                    .updatePassword(this.newPassword)
                                    .then(
                                        () => {
                                            SweetAlertHelper.thanhCong("Đổi mật khẩu thành công!");
                                            this.resetFormChangePassword();
                                        }
                                    )
                                    .catch(
                                        (error) => {
                                            SweetAlertHelper.thatBai("Đổi mật khẩu thất bại!");
                                            console.log(error);
                                        }
                                    );
                            }
                        )
                        .catch(
                            (error) => {
                                SweetAlertHelper.thatBai("Đổi mật khẩu thất bại!");
                                console.log(error);
                            }
                        );

                }
            );
    }

    /* hàm khôi phục dữ liệu trên form */
    this.resetForm = () => {
        this.account = JSON.parse(JSON.stringify(this.dataForReset));
        this.passwordConfirm = "";
        this.oldPassword = "";
        this.newPassword = "";
    }

    this.resetFormChangePassword = () => {
        this.formChangePassword.$setPristine(); 
        this.oldPassword = "";
        this.newPassword = "";
        this.passwordConfirm = "";
    }

    this.signUp = () => {
        SweetAlertHelper.choXuLy();

        // kiếm tra tên đăng nhập đã tồn tại hay chưa
        accountService
            .getOne(this.account.username)
            .then(
                (doc) => {
                    if (doc.exists) {
                        SweetAlertHelper.thatBai("Tên đăng nhập đã tồn tại!");
                        return;
                    }

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
                                            result.user
                                                .updateProfile(
                                                    {
                                                        displayName: this.account.username
                                                    }
                                                )
                                                .then(
                                                    // nếu cập nhật displayName thành công...
                                                    () => {
                                                        // thì xuất thông báo và về trang chủ
                                                        SweetAlertHelper
                                                            .thanhCong("Đăng ký thành công!")
                                                            .then(
                                                                (result) => {
                                                                    if (result.value) {
                                                                        $window.location = '/';
                                                                    };
                                                                }
                                                            );
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
            );
    }

    this.update = () => {
        SweetAlertHelper.choXuLy();

        accountService
            .update(this.account)
            .then(
                () => {
                    this.dataForReset = JSON.parse(JSON.stringify(this.account));
                    SweetAlertHelper.thanhCong("Cập nhật thành công!");
                }
            );
    }
}
