import { learnGeekAuth } from '../../assets/js/init-firebase.js';

// hook yêu cầu đăng nhập trước khi vào một trang cần xác thực
export let requireAuthHook = ($transitions) => {

    let requiresAuthCriteria = {
        to: (state) => state.data && state.data.requiresAuth
    };

    $transitions.onBefore(requiresAuthCriteria, (trans) => {
        learnGeekAuth.onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
            } else {
                trans.router.stateService.target('dang-nhap');
            }
        });

        // if (currentUser === null) {
        //     return 
        // }
    });
}