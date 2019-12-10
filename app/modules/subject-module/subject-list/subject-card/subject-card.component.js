export let SubjectCardComponent = {
    templateUrl: './app/modules/subject-module/subject-list/subject-card/subject-card.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        subject: '=',
        index: '<',
    },
};

function controller() {

}
