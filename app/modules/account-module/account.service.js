import { learnGeekDB } from '../../../assets/js/init-firebase.js';

export default function AccountService() {

    let AccountService = {};
    let collection = learnGeekDB.collection("accounts");

    AccountService.getAll = () => {

    };

    AccountService.getOne = (id) => {
        return collection
            .doc(id)
            .get();
    };

    AccountService.insert = (account) => {
        return collection
            .doc(account.username)
            .set(Object.assign({}, account))
    };

    AccountService.delete = (id) => {

    };

    AccountService.update = (id, account) => {

    };

    return AccountService;
}
