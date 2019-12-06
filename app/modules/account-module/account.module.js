import AccountService from './account.service.js';
import { AccountFormComponent } from './account-form/account-form.component.js';

export let accountModule = angular.module('accountModule', []);

/* Components */
accountModule
    .component('appAccountForm', AccountFormComponent);
    ;

/* Services */
accountModule
    .service('accountService', AccountService)
    ;