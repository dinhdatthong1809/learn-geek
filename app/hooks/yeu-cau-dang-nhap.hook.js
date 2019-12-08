// hook yêu cầu đăng nhập trước khi vào một trang cần xác thực
export let requireAuthHook = ($transitions) => {
    let requiresAuthCriteria = {
        to: (state) => state.data && state.data.requiresAuth
    };

    $transitions.onStart(requiresAuthCriteria, (trans) => {
        let authenticationService = trans.injector().get('authenticationService');

        if (!authenticationService.isAuthenticated()) {
            return trans.router.stateService.target('dang-nhap');
        }
    });
}