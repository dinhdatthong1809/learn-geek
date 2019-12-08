import { learnGeekAuth } from '../../../assets/js/init-firebase.js';

export default function AuthenticationService() {

    let AuthenticationService = {};

    AuthenticationService.account = {};

    AuthenticationService.signUp = (email, password) => {
        return learnGeekAuth.createUserWithEmailAndPassword(email, password);
    };

    AuthenticationService.signIn = (email, password) => {
        return learnGeekAuth.signInWithEmailAndPassword(email, password);
    };

    AuthenticationService.signOut = () => {
        return learnGeekAuth.signOut();
    };

    AuthenticationService.isAuthenticated = () => {
        return learnGeekAuth.currentUser ? true : false;
    };

    return AuthenticationService;
}
