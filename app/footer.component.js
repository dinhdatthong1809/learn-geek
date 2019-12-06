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
}
