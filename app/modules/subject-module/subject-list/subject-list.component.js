export let SubjectListComponent = {
    templateUrl: './app/modules/subject-module/subject-list/subject-list.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        subjects: '<'
    }
};

function controller() {
    this.index = 0;

    this.first = () => {
        this.index = 0;
    };

    this.prev = () => {
        if (this.index > 0) {
            this.index--;
        }
    };

    this.next = () => {
        if (this.index < this.quizs.length - 1) {
            this.index++;
        }
    };

    this.last = () => {
        this.index = this.quizs.length - 1;
    };
}
