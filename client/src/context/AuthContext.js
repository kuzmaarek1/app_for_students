import { useContext, createContext, useEffect, useState } from 'react';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { useDispatch } from "react-redux";
import {
    useSignInWithSocialMediaMutation,
} from "reducers/authApiSlice";

import { auth } from 'context/firebase';
import { current } from '@reduxjs/toolkit';

const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
    const [userSocialMedia, setUserSocialMedia] = useState({});
    const [userSocialMediaStatus, setUserSocialMediaStatus] = useState(true);

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        setUserSocialMediaStatus(true);
        signInWithRedirect(auth, provider)
    };

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserSocialMediaStatus(false);
            setUserSocialMedia(currentUser);

        });
        return () => {
            unsubscribe();
        };

    }, []);

    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, userSocialMedia, userSocialMediaStatus }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuthWithSocialMedia = () => {
    return useContext(AuthContext);
};