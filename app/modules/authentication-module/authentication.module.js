import AuthenticationService from './authentication.service.js';

export let authenticationModule = angular.module('authenticationModule', []);

/* Components */
authenticationModule

/* Services */
authenticationModule
    .service('authenticationService', AuthenticationService)
    ;