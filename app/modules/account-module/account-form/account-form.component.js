import Account from '../account.model.js';
import SweetAlertHelper from '../../../../assets/js/sweet-alert-helper.js';

export let AccountFormComponent = {
    templateUrl: './app/modules/account-module/account-form/account-form.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller(accountService) {
    this.account = new Account("", "", "", "", true, "", "");

    this.addAccount = () => {
        accountService
            .insert(this.account)
            .then(
                (docRef) => {
                    SweetAlertHelper.thanhCong("Đăng ký thành công!");
                    this.account = new Account("", "", "", "", true, "", "");
                    console.log(docRef);
                },
                (error) => {
                    SweetAlertHelper.thatBai("Đăng ký thất bại!");
                    console.log(error);
                }
            );
    }
}
