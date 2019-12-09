import { learnGeekAuth } from '../../../assets/js/init-firebase.js';

export default function AuthenticationService() {
    let actionCodeSettings = {
        url: 'https://learngeek.netlify.com/',
        handleCodeInApp: true,
    };

    return {
        learnGeekAuth: learnGeekAuth,

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
            return learnGeekAuth.currentUser;
        },

        sendPasswordResetEmail: (email) => {
            return  learnGeekAuth.sendPasswordResetEmail(email, actionCodeSettings)
        },
    };
}
