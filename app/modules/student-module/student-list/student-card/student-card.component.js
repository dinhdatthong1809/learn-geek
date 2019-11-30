export let StudentCardComponent = {
    templateUrl: './app/modules/student-module/student-list/student-card/student-card.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        student: '=',
        index: '<',
    },
};

function controller($scope) {
    this.rank;

    this.$onInit = () => {
        this.rank = this.getRank();
    }

    this.closeForm = () => {
        $scope.$broadcast("closeForm"); 
    }

    this.deleteOneEmit = () => {
        $scope.$emit("deleteOneEventEmitter", this.index);
    }

    this.getRank = () => {
        if (this.student.mark < 0) {
            return "Yếu / Kém";
        }
        else if (5 <= this.student.mark && this.student.mark <= 8) {
            return "Trung bình / Khá";
        }
        else {
            return "Giỏi / Xuất sắc";
        }
    }

    
}
