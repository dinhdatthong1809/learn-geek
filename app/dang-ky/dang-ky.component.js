import Account from '../modules/account-module/account.model.js';

export let DangKyComponent = {
    templateUrl: './app/dang-ky/dang-ky.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller() {
    this.account = new Account("", "", "", "", true, "", "", 0);
}
