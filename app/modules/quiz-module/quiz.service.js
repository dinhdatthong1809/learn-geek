import { learnGeekDB } from '../../../assets/js/init-firebase.js';

export function QuizService($http) {

    // let collection = learnGeekDB.collection("quizs");

    return {
        getAll: () => {
        },

        getOne: (id) => {
            return $http
                .get(`/database/quizs/${id}.json`);
        },

        insert: (subject) => {

        },

        delete: (id) => {

        },

        update: (id, subject) => {

        }
    };
}
