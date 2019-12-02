export function SubjectService($http) {

    let SubjectService = {};

    SubjectService.getAll = () => {
        return $http
            .get('/database/subjects.json')
            .then(response => response.data.subjects);
    };

    SubjectService.getOne = (id) => {

    };

    SubjectService.insert = (subject) => {

    };

    SubjectService.delete = (id) => {

    };

    SubjectService.update = (id, subject) => {

    };

    return SubjectService;
}
