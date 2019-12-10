import { learnGeekDB } from '../../../assets/js/init-firebase.js';

export function SubjectService($http) {

    let collection = learnGeekDB.collection("subjects");

    return {
        getAll: () => {
            return $http
                .get('/database/subjects.json')
                .then(
                    (response) => {
                        for (let i = 0; i < response.data.length; i++) {
                            learnGeekDB.doc(collection).set(Object.assign({}, response.data[i]));
                        }
                        

                        return response.data;
                    }
                );
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
