import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, sendPasswordResetEmail, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../utils/firebaseConfig';
import ErrorToaster from '../components/common/Toaster/ErrorToaster';
import SuccessToaster from '../components/common/Toaster/SuccessToaster';

const auth = getAuth(app);
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const signInUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const signUpUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUserWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = async (profile) => {
        setLoading(true);
        try {
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, profile);
                SuccessToaster('Profile updated successfully!');
            } else {
                throw new Error('No current user found.');
            }
        } catch (error) {
            ErrorToaster('Failed to update profile: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const passwordResetEmail = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authValue = {
        user,
        loading,
        signInUserWithGoogle,
        signUpUserWithEmail,
        signInUserWithEmail,
        signOutUser,
        updateUserProfile,
        passwordResetEmail,
    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
