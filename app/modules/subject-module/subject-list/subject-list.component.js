export let SubjectListComponent = {
    templateUrl: './app/modules/subject-module/subject-list/subject-list.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        subjects: '<'
    }
};

function controller() {
    this.begin = 0;

    this.numberOfItem = 6;

    this.first = () => {
        this.pageCount = Math.ceil(this.subjects.length / this.numberOfItem);
        this.begin = 0;
    };

    this.prev = () => {
        this.pageCount = Math.ceil(this.subjects.length / this.numberOfItem);
        if (this.begin > 0) {
            this.begin -= this.numberOfItem;
        }
    };

    this.next = () => {
        this.pageCount = Math.ceil(this.subjects.length / this.numberOfItem);
        if (this.begin < (this.pageCount - 1) * this.numberOfItem) {
            this.begin += this.numberOfItem;
        }
    }

    this.last = () => {
        this.pageCount = Math.ceil(this.subjects.length / this.numberOfItem);
        this.begin = (this.pageCount - 1) * this.numberOfItem;
    }
}
