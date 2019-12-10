export let QuizListComponent = {
    templateUrl: './app/modules/quiz-module/quiz-list/quiz-list.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        quizs: '<'
    }
};

function controller() {
    this.index = 0;

    this.prev = () => {
        this.index++;
    };

    this.next = () => {
        this.index++;
    };

}
