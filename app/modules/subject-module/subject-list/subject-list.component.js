import SweetAlertHelper from '../../../../assets/js/sweet-alert-helper.js';

export let SubjectListComponent = {
    templateUrl: './app/modules/subject-module/subject-list/subject-list.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller(subjectService) {
    this.subjects;

    this.$onInit = () => {
        this.getAll();
    };

    this.getAll = () => {
        let onSuccess = (response) => {
            this.subjects = response.data.subjects;
            this.error = '';
        };

        let onError = (reason) => {
            this.error = "Error in retrieving data.";
        };

        subjectService.getAll().then(onSuccess, onError);
    };



}
