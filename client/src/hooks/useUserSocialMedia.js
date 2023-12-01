import { useContext, createContext, useEffect, useState } from 'react';
import {
    GoogleAuthProvider,
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
        signInWithRedirect(auth, provider)
    };

    const facebookSignIn = async () => {
        const provider = new FacebookAuthProvider();
        setUserSocialMediaStatus(true);
        signInWithRedirect(auth, provider).then((r) => console.log(r)).catch((e) => console.log(e))
        console.log("facebook");
    };

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUserSocialMediaStatus(false);
            setUserSocialMedia(currentUser);

        });
        return () => {
            unsubscribe();
        };

    }, []);

    return (
        <AuthContext.Provider value={{ googleSignIn, facebookSignIn, logOut, userSocialMedia, userSocialMediaStatus }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useUserSocialMedia = () => {
    return useContext(AuthContext);
};