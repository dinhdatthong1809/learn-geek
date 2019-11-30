export function StudentService($http) {

    let StudentService = {};

    StudentService.getAll = () => {
        return $http.get('https://ps08464-dinhdatthong-lab5.netlify.com/database/student.json');
    };

    StudentService.getOne = (id) => {

    };

    StudentService.insert = (student) => {

    };

    StudentService.delete = (id) => {

    };

    StudentService.update = (id, student) => {

    };

    return StudentService;
}
