export let HomeComponent = {
    templateUrl: './app/home/home.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller(authenticationService) {
    let account = authenticationService.isAuthenticated();

    this.showRegisterSection = account ? false : true;

    this.aboutUsTiles = [
        {
            title: "Chọn khóa học",
            content: "Từ những khóa học cơ bản đến chuyên sâu, lựa chọn là của bạn. Bạn chưa định hướng được? Chúng tôi sẽ chỉ dẫn tận tình.",
            icon: "note.png"
        },
        {
            title: "Lý thuyết đi đôi với thực hành",
            content: "Không cần biết bạn đang ở trình độ nào, bạn sẽ ghi được những mã lệnh chỉ trong vài phút.",
            icon: "clock.png"
        },
        {
            title: "Ứng dụng kiến thức vào thực tế",
            content: "Thông qua các bài trắc nghiệm, các bài tập dự án phải nộp, bạn sẽ biết cách sử dụng chuyên môn của mình vào thực tế.",
            icon: "target.png"
        },
        {
            title: "Chuyến bay uớc mơ nghề nghiệp đáp cánh",
            content: "Việc học không bao giờ dừng. Hãy học những gì cần thiết và đạt được thành công.",
            icon: "man.png"
        },
    ];
}
