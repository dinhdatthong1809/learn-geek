import { learnGeekDB } from '../../../assets/js/init-firebase.js';

export function QuizService($http) {
    this.dangLamBai = false;
    // let collection = learnGeekDB.collection("quizs");

    this.getAll = () => {
        
    };

    this.getOne = (id) => {
        return $http
            .get(`/database/quizs/${id}.json`);
    };

    return;
    // return {
    //     getAll: () => {
    //     },

    //     getOne: (id) => {
    //         return $http
    //             .get(`/database/quizs/${id}.json`);
    //     },

    //     insert: (subject) => {

    //     },

    //     delete: (id) => {

    //     },

    //     update: (id, subject) => {

    //     }
    // };
}
