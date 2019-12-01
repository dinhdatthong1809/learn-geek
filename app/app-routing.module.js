import { app } from './app.module.js';
import { HomeComponent } from './home/home.component.js';
import { KhoaHocComponent } from './khoa-hoc/khoa-hoc.component.js';
import { HoiDapComponent } from './hoi-dap/hoi-dap.component.js';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component.js';

app.config(($routeProvider, $locationProvider) => {
    
    $locationProvider.hashPrefix('');
    
    $routeProvider
        .when("/", HomeComponent)
        .when("/khoa-hoc", KhoaHocComponent)
        .when("/hoi-dap", HoiDapComponent)
        .when("/dang-nhap", DangNhapComponent)
        .otherwise({
            redirectTo: '/'
        });
});
