import { learnGeekDB } from '../../../assets/js/init-firebase.js';

export default function AccountService() {

    let collection = learnGeekDB.collection("accounts");

    return {
        getAll: () => {
            return collection
                .doc(id)
                .get();
        },

        getOne: (id) => {
            return collection
                .doc(id)
                .get();
        },

        insert: (account) => {
            return collection
                .doc(account.username)
                .set(Object.assign({}, account))
        },

        delete: (id) => {

        },

        update: (id, account) => {

        }
    };
}
