import { app } from './app.module.js';
import { HomeComponent } from './home/home.component.js';
import { KhoaHocComponent } from './khoa-hoc/khoa-hoc.component.js';
import { HoiDapComponent } from './hoi-dap/hoi-dap.component.js';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component.js';
import { DangKyComponent } from './dang-ky/dang-ky.component.js';

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when("/", HomeComponent)
        .when("/khoa-hoc", KhoaHocComponent)
        .when("/hoi-dap", HoiDapComponent)
        .when("/dang-nhap", DangNhapComponent)
        // .when("/dang-ky", DangKyComponent)
        .otherwise({
            redirectTo: '/'
        });
});