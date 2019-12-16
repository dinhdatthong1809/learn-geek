export let SubjectListComponent = {
    templateUrl: './app/modules/subject-module/subject-list/subject-list.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        subjects: '<',
        size: '<'
    }
};

function controller() {
    this.begin = 0;

    this.numberOfItem = 6;
    this.pageCount = Math.ceil(this.size / this.numberOfItem);

    this.first = () => {
        this.begin = 0;
    };

    this.prev = () => {
        if (this.begin > 0) {
            this.begin -= this.numberOfItem;
        }
    };

    this.next = () => {
        if (this.begin < (this.pageCount - 1) * this.numberOfItem) {
            this.begin += this.numberOfItem;
        }
    }

    this.last = () => {
        this.begin = (this.pageCount - 1) * this.numberOfItem;
    }
}
