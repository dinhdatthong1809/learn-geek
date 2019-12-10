export let QuizCardComponent = {
    templateUrl: './app/modules/quiz-module/quiz-list/quiz-card/quiz-card.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        quiz: '=',
        index: '<',
    },
};

function controller() {

}
