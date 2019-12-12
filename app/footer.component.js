import SweetAlertHelper from '../assets/js/sweet-alert-helper.js';

export let FooterComponent = {
    templateUrl: './app/footer.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller() {
    this.socialIcons = [
        "fab fa-facebook-f",
        "fab fa-instagram",
        "fab fa-github"
    ];

    this.mail = {
        email: "",
        content: ""
    }

    this.guiGopY = () => {
        SweetAlertHelper.thanhCong("Gửi góp ý thành công!");
    }
}
