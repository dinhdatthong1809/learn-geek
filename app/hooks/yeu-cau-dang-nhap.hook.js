// hook yêu cầu đăng nhập trước khi vào một trang cần xác thực
export let requireAuthHook = ($transitions, authenticationService) => {

    let requiresAuthCriteria = {
        to: (state) => state.data && state.data.requiresAuth
    };

    $transitions.onBefore(requiresAuthCriteria, (trans) => {
        authenticationService.learnGeekAuth.onAuthStateChanged((user) => {
            if (user) {

            } else {
                console.log("done");
                trans.router.stateService.target('dang-nhap');
            }
        });

        console.log("outside");
    });
}