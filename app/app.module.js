import { AppComponent } from './app.component.js';
import { FooterComponent } from './footer.component.js';

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
    .component("appFooter", FooterComponent)
    .component("appHome", HomeComponent)
    .component("appDangKy", DangKyComponent)
    .component("appGioiThieu", GioiThieuComponent)
    .component("appKhoaHoc", KhoaHocComponent)
    .component("appLienHe", LienHeComponent)
    .component("appHoiDap", HoiDapComponent)
    .component("appDangNhap", DangNhapComponent)
    ;

/* Services */    
app.service('anchorSmoothScroll', function() {
    this.scrollTo = function (eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };

});