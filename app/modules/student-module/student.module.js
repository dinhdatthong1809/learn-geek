import { StudentFormCardComponent } from './student-form-card/student-form-card.component.js'
import { StudentFormComponent } from './student-form-card/student-form/student-form.component.js'
import { StudentService } from './student.service.js';

export let studentModule = angular.module('studentModule', []);

/* Components */
studentModule
    .component("appStudentFormCard", StudentFormCardComponent)
    .component("appStudentForm", StudentFormComponent)
    ;

/* Services */
studentModule
    .service('studentService', StudentService)
    ;