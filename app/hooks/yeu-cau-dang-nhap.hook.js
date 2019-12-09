// hook yêu cầu đăng nhập trước khi vào một trang cần xác thực
export let requireAuthHook = ($transitions, authenticationService) => {
    
    let requiresAuthCriteria = {
        to: (state) => state.data && state.data.requiresAuth
    };
    
    $transitions.onBefore(requiresAuthCriteria, (trans) => {
        let currentUser = authenticationService.isAuthenticated();

        if (currentUser === null) {
            return trans.router.stateService.target('dang-nhap');
        }
    }, {priority: 10});
}