import SweetAlertHelper from '../../../../../assets/js/sweet-alert-helper.js';

export let StudentFormComponent = {
    templateUrl: './app/modules/student-module/student-form-card/student-form/student-form.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        state: '<',
        student: '='
    },
};

function controller($scope) {

    /* trạng thái form */
    this.INSERT = 1;
    this.UPDATE = 2;

    this.studentOldData;

    /* hàm onInit */
    this.$onInit = () => {

        if (this.state == this.INSERT) {
            this.title = 'Thêm sinh viên';
        }
        else if (this.state == this.UPDATE) {
            this.title = 'Cập nhật sinh viên';
        }

        this.studentOldData = JSON.parse(JSON.stringify(this.student));
    }

    /* hàm lắng nghe sự kiện */
    $scope.$on("closeForm", () => {
        this.resetForm();
    });

    /* hàm khôi phục dữ liệu trên form */
    this.resetForm = () => {
        this.student = JSON.parse(JSON.stringify(this.studentOldData));
    }

    /* hàm lưu dữ liệu */
    this.save = () => {
        if (this.state == this.INSERT) {
            $scope.$emit("insertEventEmitter", JSON.parse(JSON.stringify(this.student)));
            SweetAlertHelper.thanhCong("Thêm mới thành công");
        }
        else if (this.state == this.UPDATE) {
            this.studentOldData = JSON.parse(JSON.stringify(this.student));
            SweetAlertHelper.thanhCong("Cập nhật thành công");
        }
    }
    
}
