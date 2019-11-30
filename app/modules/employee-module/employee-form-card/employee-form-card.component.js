let EmployeeFormCardComponent = {
    templateUrl: './app/modules/employee-module/employee-form-card/employee-form-card.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        state: '<',
        employee: '<'
    },
};

function controller() {

}

export {EmployeeFormCardComponent}
