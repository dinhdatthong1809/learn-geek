export let HoiDapComponent = {
    templateUrl: './app/hoi-dap/hoi-dap.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller() {
    this.faqs = [
        {
            title: 'LearnGeek là gì? Tôi có thể làm gì ở trang này?',
            content: 'LearnGeek gồm hai từ là learn, tiếng Việt là học, geek là từ ám chỉ những người có tố chất và đam mê vào máy tính, chương trình. Tại đây, chúng tôi cung cấp các khóa học về ngành công nghệ thông tin, đi đôi với bài tập thực hành gồm trắc nghiệm và trực tiếp viết mã trên nền trình duyệt. Các bạn có thể tìm kiếm các khóa học cần có để bổ sung kiến thức, hoặc cũng có thể học vì niềm vui và sự tò mò.'
        },
        {
            title: 'Nếu gặp sự cố hay trục trặc, tôi có thể liên hệ ai, ở đâu?',
            content: 'Bạn có thể vào trang chủ bằng cách nhấn vào nhãn hiệu ở góc trên bên trái, sau đó cuộn trang xuống phần dưới cùng trang web, tại đây bạn có thể gửi góp ý và thấy các thông tin liên hệ.'
        },
        {
            title: 'Các khóa học này có miễn phí không?',
            content: 'Hiện tại tất cả khóa học là hoàn toàn miễn phí. Nhưng để đảm bảo tính phát triển cũng như động lực cho người học, chúng tôi sẽ cập nhật các khóa học chuyên sâu và chỉ thu phí các khóa chuyên sâu này trong tương lai.'
        },
        {
            title: 'Các kiến thức và bài giảng có phù hợp với người ngoại đạo không?',
            content: 'Các tài liệu của chúng tôi đã được nghiên cứu và chuẩn bị cho những học viên hoàn toàn xa lạ với máy tính cũng có thể tiếp cận một cách hiệu quả, rút ngắn thời gian nhất có thể.'
        },
        {
            title: 'Khi hoàn thành một khóa, tôi có nhận được bằng cấp nào không?',
            content: 'Vào thời điểm hiện tại, chúng tôi vẫn chưa có chương trình cấp bằng cho học viên.'
        },
    ];
}
