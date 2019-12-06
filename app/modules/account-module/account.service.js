import {learnGeekDB} from '../../../assets/js/init-firebase.js';

export default function AccountService() {

    let AccountService = {};
    let collectionName = "accounts";

    AccountService.getAll = () => {

    };

    AccountService.getOne = (id) => {

    };

    AccountService.insert = (account) => {
        return learnGeekDB
            .collection(collectionName)
            .doc(account.username)
            .set(Object.assign({}, account))
    };

    AccountService.delete = (id) => {

    };

    AccountService.update = (id, account) => {

    };

    return AccountService;
}
