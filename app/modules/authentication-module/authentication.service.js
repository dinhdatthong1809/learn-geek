import { learnGeekAuth } from '../../../assets/js/init-firebase.js';

export default function AuthenticationService() {
    let actionCodeSettings = {
        url: 'https://learngeek.netlify.com/',
        handleCodeInApp: true
    };

    return {
        signUp: (email, password) => {
            return learnGeekAuth.createUserWithEmailAndPassword(email, password);
        },

        signIn: (email, password) => {
            return learnGeekAuth.signInWithEmailAndPassword(email, password);
        },

        signOut: () => {
            return learnGeekAuth.signOut();
        },

        isAuthenticated: () => {
            let currentUser = learnGeekAuth.currentUser;
            return currentUser ? currentUser : null;
        },

        sendPasswordResetEmail: (email) => {
            return  learnGeekAuth.sendPasswordResetEmail(email, actionCodeSettings)
        },
    };
}
