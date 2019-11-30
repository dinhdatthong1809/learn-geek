import SweetAlertHelper from '../../../../assets/js/sweet-alert-helper.js';

export let StudentListComponent = {
    templateUrl: './app/modules/student-module/student-list/student-list.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller($scope, $timeout, studentService) {
    this.students;
    this.error;

    this.$onInit = () => {
        this.getAll();
    };

    this.getAll = () => {
        let onSuccess = (response) => {
            this.students = response.data.students;
            this.error = '';
        };

        let onError = (reason) => {
            this.error = "Error in retrieving data.";
        };

        studentService.getAll().then(onSuccess, onError);
    };

    this.closeForm = () => {
        $scope.$broadcast("closeForm");
    }

    $scope.$on("insertEventEmitter", (evt, student) => {
        this.insert(student);
    });

    $scope.$on("deleteOneEventEmitter", (evt, index) => {
        SweetAlertHelper.hoi(`Bạn chắc chắn muốn xóa <b>${this.students[index].fullName}</b>?`, () => {
            // buộc hàm bên trong sẽ chạy trong cycle tiếp theo (vấn đề buộc dữ liệu hai chiều)
            $timeout(this.delete(index));
        });
    });

    this.insert = (student) => {
        this.students.push(student);
    };

    this.delete = (index) => {
        this.students.splice(index, 1);
    };

}
