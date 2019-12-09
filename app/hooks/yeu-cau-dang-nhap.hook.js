// hook yêu cầu đăng nhập trước khi vào một trang cần xác thực
export let requireAuthHook = ($transitions) => {
    
    let requiresAuthCriteria = {
        to: (state) => state.data && state.data.requiresAuth
    };
    
    $transitions.onBefore(requiresAuthCriteria, (trans) => {
        let authenticationService = trans.injector().get('authenticationService');
        
        let currentUser = authenticationService.isAuthenticated();

        if (currentUser === null) {
            return trans.router.stateService.target('dang-nhap');
        }
    });
}