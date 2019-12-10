import { learnGeekDB } from '../../../assets/js/init-firebase.js';

export function SubjectService($http) {

    let collection = learnGeekDB.collection("subjects");

    return {
        getAll: () => {
            return collection
                .get()
                .then(
                    (querySnapshot) => {
                        let list = [];
                        querySnapshot.forEach( doc => list.push(doc.data()) );
                        return list;
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
