import { EmployeeFormCardComponent } from './employee-form-card/employee-form-card.component.js'
import { EmployeeFormComponent } from './employee-form-card/employee-form/employee-form.component.js'
import { EmployeeService } from './employee.service.js';

export let employeeModule = angular.module('employeeModule', []);

/* Components */
employeeModule
    .component("appEmployeeFormCard", EmployeeFormCardComponent)
    .component("appEmployeeForm", EmployeeFormComponent)
    ;

/* Services */
employeeModule
    .service('employeeService', EmployeeService)
    ;