export function SubjectService($http) {
    return {
        getAll: () => {
            return $http
                .get('/database/subjects.json')
                .then(response => response.data);
        },

        getOne: (id) => {

        },

        insert: (subject) => {

        },

        delete: (id) => {

        },

        update: (id, subject) => {

        }
    };
}
