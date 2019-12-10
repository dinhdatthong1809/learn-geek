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
        if (this.index > 0) {
            this.index--;
        }
    };

    this.next = () => {
        if (this.index < quizs.length - 1) {
            this.index++;
        }
    };

}
