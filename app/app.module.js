import { AppComponent } from './app.component.js';
import { HomeComponent } from './home/home.component.js';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component.js';
import { KhoaHocComponent } from './khoa-hoc/khoa-hoc.component.js';
import { LienHeComponent } from './lien-he/lien-he.component.js';
import { HoiDapComponent } from './hoi-dap/hoi-dap.component.js';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component.js';
import { DangKyComponent } from './dang-ky/dang-ky.component.js';

import { studentModule } from './modules/student-module/student.module.js';
import { employeeModule } from './modules/employee-module/employee.module.js';
import { subjectModule } from './modules/subject-module/subject.module.js';

export let app = angular.module('myApp',
    [
        'ngRoute',
        'ngMaterial',
        'ngMessages',
        'studentModule',
        'employeeModule',
        'subjectModule',
    ]
);

/* Components */
app
    .component("appRoot", AppComponent)
    .component("appHome", HomeComponent)
    .component("appDangKy", DangKyComponent)
    .component("appGioiThieu", GioiThieuComponent)
    .component("appKhoaHoc", KhoaHocComponent)
    .component("appLienHe", LienHeComponent)
    .component("appHoiDap", HoiDapComponent)
    .component("appDangNhap", DangNhapComponent)
    ;
