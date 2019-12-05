import { app } from './app.module.js';

app.config(($stateProvider, $locationProvider, $urlRouterProvider) => {

    $locationProvider.hashPrefix('');

    $urlRouterProvider.otherwise('/');

    let routes = [
        {
            name: '/',
            url: '/',
            component: "appHome"
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
                name: 'xac-thuc.dang-nhap',
                url: '/dang-nhap',
                component: 'appDangNhap',
            },
            {
                name: 'xac-thuc.quen-mat-khau',
                url: '/quen-mat-khau',
                component: 'appQuenMatKhau',
            }
    ];

    routes.forEach(route => $stateProvider.state(route));
});