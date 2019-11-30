let EmployeeFormComponent = {
    templateUrl: './app/modules/employee-module/employee-form-card/employee-form/employee-form.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        state: '<',
        employee: '='
    },
};

function controller($scope) {

    /* trạng thái form */
    this.INSERT = 1;
    this.UPDATE = 2;

    this.ages = [
        {
            age: 'Dưới 25',
            rate: 0.07
        },
        {
            age: 'Từ 25 đến 40',
            rate: 0.1
        },
        {
            age: 'Trên 40',
            rate: 0.15
        },
    ];

    this.employeeOldData;

    /* hàm onInit */
    this.$onInit = () => {
        if (this.state == this.INSERT) {
            this.title = 'Thêm nhân viên';
            this.employee.age = this.ages[0];
        }
        else if (this.state == this.UPDATE) {
            this.title = 'Cập nhật nhân viên';
        }
        
        this.employeeOldData = JSON.parse(JSON.stringify(this.employee));
    }

    /* hàm lắng nghe sự kiện */
    $scope.$on("closeForm", () => {
        this.resetForm();
    });

    /* hàm khôi phục dữ liệu trên form */
    this.resetForm = () => {
        this.employee = JSON.parse(JSON.stringify(this.employeeOldData));
    }

    this.getBonus = () => {
        if (!this.employee.age) {
            return 0;
        }

        let bonus = this.employee.age.rate * this.employee.salary;
        if (this.employee.gender == false) {
            bonus += 200000;
        }
        return bonus;
    }
}

export {EmployeeFormComponent}
