import { app } from './app.module.js';

app.config(($stateProvider, $locationProvider, $urlRouterProvider) => {

    $locationProvider.hashPrefix('');

    $urlRouterProvider.otherwise('/');

    let routes = [
        { name: '/', url: '/', component: "appHome" },
        { name: 'hoi-dap', url: '/hoi-dap', component: 'appHoiDap' },
        {
            name: 'khoa-hoc',
            url: '/khoa-hoc',
            component: 'appKhoaHoc',
            resolve: {
                subjects: subjectService => subjectService.getAll()
            }
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
            },
        
    ];

    routes.forEach(route => $stateProvider.state(route));
});