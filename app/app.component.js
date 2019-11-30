export let AppComponent = {
    templateUrl: './app/app.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller($location) {
    this.author = {
        id: 'PS08464',
        fullName: 'Đinh Đạt Thông',
        birthday: '18-09-1997',
        gender: true,
        photo: 'PS08464-DinhDatThong.jpg',
        mark: 10,
        facebook: 'https://www.facebook.com/dinh.dat.thong'
    };

    this.leftRoutes = [
        { url: '#/khoa-hoc', name: 'Khóa học' },
        { url: '#/hoi-dap', name: 'Hỏi đáp' },
    ];

    this.rightRoutes = [
        { url: '#/dang-nhap', name: 'Đăng nhập' },
        // { url: '#dang-ky', name: 'Đăng ký' },
    ];

    this.isActive = (viewLocation) => {
        return viewLocation === ('#' + $location.path());
    };
}
