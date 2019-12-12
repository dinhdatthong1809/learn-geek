import { app } from './app.module.js';

app.config(($stateProvider, $locationProvider, $urlRouterProvider) => {

    $locationProvider.hashPrefix('');

    $urlRouterProvider.otherwise('/');

    let routes = [
        {
            name: '/',
            url: '/',
            component: "appHome",
            resolve: {
                showRegisterSection: async (authenticationService) => {
                    let currentUser = await authenticationService.isAuthenticated();
                    return currentUser === null ? true : false;
                }
            }
        },
        {
            name: 'khoa-hoc',
            url: '/khoa-hoc',
            component: 'appKhoaHoc',
            resolve: {
                subjects: subjectService => subjectService.getAll()
            }
        },
        {
            name: 'bai-tap-trac-nghiem',
            url: '/bai-tap-trac-nghiem/{maMonHoc}',
            component: 'appBaiTapTracNghiem',
            // xem chi tiết tại ./global/yeu-cau-dang-nhap.hook.js
            data: { requiresAuth: true },
            resolve: {
                subject: (subjectService, $stateParams, $timeout, $window) => {
                    return subjectService
                        .getOne($stateParams.maMonHoc)
                        .then(doc => doc.data())
                        .catch(error => $timeout(() => $window.location = '/'));
                },
                allQuizs: (quizService, $stateParams, $timeout, $window) => {
                    return quizService
                        .getOne($stateParams.maMonHoc)
                        .then(
                            response => {
                                return response.data;
                            }
                        )
                        .catch(error => $timeout(() => $window.location = '/'));
                },
                quizs: (quizService, $stateParams, $timeout, $window) => {
                    return quizService
                        .getOne($stateParams.maMonHoc)
                        .then(
                            response => {
                                return _.sample(response.data, 10);
                                // return response.data;
                            }
                        )
                        .catch(error => $timeout(() => $window.location = '/'));
                },
                deadline: (quizService, $stateParams, $timeout, $window) => {
                    return quizService
                        .getOne($stateParams.maMonHoc)
                        .then(response => (_.sample(response.data, 10).length) * 60)
                        .catch(error => $timeout(() => $window.location = '/'));
                }
            }
        },
        {
            name: 'luyen-tap',
            url: '/luyen-tap',
            component: "appLuyenTap"
        },
        {
            name: 'thao-luan',
            url: '/thao-luan',
            component: "appThaoLuan"
        },
        {
            name: 'hoi-dap',
            url: '/hoi-dap',
            component: 'appHoiDap'
        },
        {
            name: 'xac-thuc',
            url: '/xac-thuc',
            component: 'appXacThuc'
        },
        {
            parent: 'xac-thuc',
            name: 'dang-nhap',
            url: '/dang-nhap',
            component: 'appDangNhap',
        },
        {
            parent: 'xac-thuc',
            name: 'quen-mat-khau',
            url: '/quen-mat-khau',
            component: 'appQuenMatKhau',
        },
        {
            name: 'trang-ca-nhan',
            url: '/trang-ca-nhan',
            component: 'appTrangCaNhan',
            // xem chi tiết tại ./global/yeu-cau-dang-nhap.hook.js
            data: { requiresAuth: true },
            resolve: {
                account: async ($state, authenticationService, accountService) => {
                    let currentUser = await authenticationService.isAuthenticated();

                    if (currentUser === null) {
                        $timeout(function () {
                            $state.go('dang-nhap');
                        })
                        return null;
                    }

                    let username = currentUser.displayName;
                    return accountService
                        .getOne(username)
                        .then(doc => doc.data());
                }
            }
        },
    ];

    routes.forEach(route => $stateProvider.state(route));
});