import { useContext, createContext, useEffect, useState } from 'react';
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    TwitterAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    FacebookAuthProvider
} from 'firebase/auth';
import { auth } from 'constans/firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [userSocialMedia, setUserSocialMedia] = useState({});
    const [userSocialMediaStatus, setUserSocialMediaStatus] = useState(true);

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        setUserSocialMediaStatus(true);
        await signInWithRedirect(auth, provider)
    };

    const facebookSignIn = async () => {
        const provider = new FacebookAuthProvider();
        setUserSocialMediaStatus(true);
        await signInWithRedirect(auth, provider)
    };

    const githubSignIn = async () => {
        const provider = new GithubAuthProvider();
        setUserSocialMediaStatus(true);
        await signInWithRedirect(auth, provider)
    };


    const twitterSignIn = async () => {
        const provider = new TwitterAuthProvider();
        setUserSocialMediaStatus(true);
        await signInWithRedirect(auth, provider)
    };

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserSocialMediaStatus(false);
            console.log(currentUser);
            if (currentUser) {
                setUserSocialMedia(currentUser);
            } else {
                setUserSocialMedia(null);
            }

        });
        return () => {
            unsubscribe();
        };

    }, []);

    return (
        <AuthContext.Provider value={{ googleSignIn, facebookSignIn, twitterSignIn, githubSignIn, logOut, userSocialMedia, userSocialMediaStatus }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useUserSocialMedia = () => {
    return useContext(AuthContext);
};