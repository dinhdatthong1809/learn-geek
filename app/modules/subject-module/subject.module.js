import { SubjectListComponent } from './subject-list/subject-list.component.js'
import { SubjectCardComponent } from './subject-list/subject-card/subject-card.component.js'
import { SubjectService } from './subject.service.js';

export let subjectModule = angular.module('subjectModule', []);

/* Components */
subjectModule
    .component("appSubjectList", SubjectListComponent)
    .component("appSubjectCard", SubjectCardComponent)
    ;

/* Services */
subjectModule
    .service('subjectService', SubjectService)
    ;