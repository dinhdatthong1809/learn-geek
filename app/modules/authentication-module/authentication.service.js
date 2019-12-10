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

        isAuthenticated: async () => {
            return await new Promise(resolve => {
                if (learnGeekAuth.currentUser) {
                    resolve(learnGeekAuth.currentUser);
                }
                else {
                    const unsubscribe = learnGeekAuth.onAuthStateChanged((user) => {
                        unsubscribe();
                        resolve(user ? learnGeekAuth.currentUser : null);
                    });
                }
            });
        },

        sendPasswordResetEmail: (email) => {
            return learnGeekAuth.sendPasswordResetEmail(email, actionCodeSettings)
        },
    };
}
