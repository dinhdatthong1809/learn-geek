import { AppComponent } from './app.component.js';
import { FooterComponent } from './footer.component.js';
import { HomeComponent } from './home/home.component.js';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component.js';
import { KhoaHocComponent } from './khoa-hoc/khoa-hoc.component.js';
import { ThaoLuanComponent } from './thao-luan/thao-luan.component.js';
import { HoiDapComponent } from './hoi-dap/hoi-dap.component.js';
import { XacThucComponent } from './xac-thuc/xac-thuc.component.js';
import { DangNhapComponent } from './xac-thuc/dang-nhap/dang-nhap.component.js';
import { QuenMatKhauComponent } from './xac-thuc/quen-mat-khau/quen-mat-khau.component.js';
import { DangKyComponent } from './dang-ky/dang-ky.component.js';
import { LuyenTapComponent } from './luyen-tap/luyen-tap.component.js';
import { TrangCaNhanComponent } from './trang-ca-nhan/trang-ca-nhan.component.js';
import { BaiTapTracNghiemComponent } from './bai-tap-trac-nghiem/bai-tap-trac-nghiem.component.js';

import { angularSwitchModule } from '../assets/lib/js/angular-bootstrap-switch.js';
import { authenticationModule } from './modules/authentication-module/authentication.module.js';
import { accountModule } from './modules/account-module/account.module.js';
import { subjectModule } from './modules/subject-module/subject.module.js';
import { quizModule } from './modules/quiz-module/quiz.module.js';

import { requireAuthHook } from './hooks/yeu-cau-dang-nhap.hook.js';
import { loadingIndicatorHook } from './hooks/dang-tai-trang.hook.js';

export let app = angular.module('myApp',
    [
        'ui.router',
        'angularBootstrapSwitch',
        'ngMaterial',
        'ngMessages',
        'authenticationModule',
        'accountModule',
        'subjectModule',
        'quizModule',
    ]
);

/* Components */
app
    .component("appRoot", AppComponent)
        .component("appFooter", FooterComponent)

    .component("appHome", HomeComponent)
        .component("appGioiThieu", GioiThieuComponent)
        .component("appDangKy", DangKyComponent)

    .component("appKhoaHoc", KhoaHocComponent)
    .component("appBaiTapTracNghiem", BaiTapTracNghiemComponent)
    .component("appLuyenTap", LuyenTapComponent)
    .component("appThaoLuan", ThaoLuanComponent)
    .component("appHoiDap", HoiDapComponent)

    .component("appXacThuc", XacThucComponent)
        .component("appDangNhap", DangNhapComponent)
        .component("appQuenMatKhau", QuenMatKhauComponent)
    .component("appTrangCaNhan", TrangCaNhanComponent)
    ;

/* Services */
app.service('anchorSmoothScroll', function () {
    this.scrollTo = function (eID) {
        angular.element(document).ready(() => {

            // This scrolling function 
            // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

            let startY = currentYPosition();
            let stopY = elmYPosition(eID);
            let distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100) {
                scrollTo(0, stopY); return;
            }
            let speed = Math.round(distance / 100);
            if (speed >= 20) speed = 20;
            let step = Math.round(distance / 25);
            let leapY = stopY > startY ? startY + step : startY - step;
            let timer = 0;
            if (stopY > startY) {
                for (let i = startY; i < stopY; i += step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY += step; if (leapY > stopY) leapY = stopY; timer++;
                } return;
            }
            for (let i = startY; i > stopY; i -= step) {
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
                let elm = document.getElementById(eID);
                let y = elm.offsetTop;
                let node = elm;
                while (node.offsetParent && node.offsetParent != document.body) {
                    node = node.offsetParent;
                    y += node.offsetTop;
                } return y;
            }
        });
    };
});

/* Directives */
app.directive('compareTo', () => {
    return {
        require: 'ngModel',
        scope: {
            otherModelValue: '=compareTo'
        },
        link: (scope, element, attributes, ngModel) => {
            ngModel.$validators.compareTo = (modelValue) => {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch('otherModelValue', () => {
                ngModel.$validate();
            });
        }
    };
});

app.directive('timer', function ($timeout, $compile) {
    return {
        restrict: 'E',
        scope: {
            interval: '=', //don't need to write word again, if property name matches HTML attribute name
            startTimeAttr: '=?startTime', //a question mark makes it optional
            countdownAttr: '=?countdown' //what unit?
        },
        template: '<div><p>' +
            '<p>Time ends in : {{ hours }} hour<span data-ng-show="hours > 1">s</span>, ' +
            '{{ minutes }} minutes, ' +
            '{{ seconds }} seconds ' +
            '<span data-ng-if="millis">, milliseconds: {{millis}}</span></p>' +

            '<p>Interval ID: {{ intervalId  }}<br>' +
            'Start Time: {{ startTime | date:"mediumTime" }}<br>' +
            'Stopped Time: {{ stoppedTime || "Not stopped" }}</p>' +
            '</p>' +
            '<button data-ng-click="resume()" data-ng-disabled="!stoppedTime">Resume</button>' +
            '<button data-ng-click="stop()" data-ng-disabled="stoppedTime">Stop</button>',

        link: function (scope, elem, attrs) {

            //Properties
            scope.startTime = scope.startTimeAttr ? new Date(scope.startTimeAttr) : new Date();
            var countdown = (scope.countdownAttr && parseInt(scope.countdownAttr, 10) > 0) ? parseInt(scope.countdownAttr, 10) : 60; //defaults to 60 seconds

            function tick() {

                //How many milliseconds have passed: current time - start time
                scope.millis = new Date() - scope.startTime;

                if (countdown > 0) {
                    scope.millis = countdown * 1000;
                    countdown--;
                } else if (countdown <= 0) {
                    scope.stop();
                    console.log('Your time is up!');
                }

                scope.seconds = Math.floor((scope.millis / 1000) % 60);
                scope.minutes = Math.floor(((scope.millis / (1000 * 60)) % 60));
                scope.hours = Math.floor(((scope.millis / (1000 * 60 * 60)) % 24));
                scope.days = Math.floor(((scope.millis / (1000 * 60 * 60)) / 24));

                //is this necessary? is there another piece of unposted code using this?
                scope.$emit('timer-tick', {
                    intervalId: scope.intervalId,
                    millis: scope.millis
                });

                scope.$apply();

            }

            function resetInterval() {
                if (scope.intervalId) {
                    clearInterval(scope.intervalId);
                    scope.intervalId = null;
                }
            }

            scope.stop = function () {
                scope.stoppedTime = new Date();
                resetInterval();
            }

            //if not used anywhere, make it a regular function so you don't pollute the scope
            function start() {
                resetInterval();
                scope.intervalId = setInterval(tick, scope.interval);
            }

            scope.resume = function () {
                scope.stoppedTime = null;
                scope.startTime = new Date() - (scope.stoppedTime - scope.startTime);
                start();
            }

            start(); //start timer automatically

            //Watches
            scope.$on('time-start', function () {
                start();
            });

            scope.$on('timer-resume', function () {
                scope.resume();
            });

            scope.$on('timer-stop', function () {
                scope.stop();
            });

            //Cleanup
            elem.on('$destroy', function () {
                resetInterval();
            });

        }
    };
});

/* Hooks */
app.run(requireAuthHook);
app.run(loadingIndicatorHook);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['myApp']);
});

