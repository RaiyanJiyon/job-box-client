import React from 'react';
import useAuth from '../../../hooks/useAuth';
import SuccessToaster from '../Toaster/SuccessToaster';
import ErrorToaster from '../Toaster/ErrorToaster';
import { useNavigate } from 'react-router-dom';

const WelcomeAuth = ({ welcomeMessage, title, description }) => {
    const {signInUserWithGoogle} = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInUserWithGoogle()
        .then(result => {
            SuccessToaster("Successfully sign in with google.");
            navigate('/');
        })
        .catch(error => {
            ErrorToaster(error.message);
        })
    };

    return (
        <div className='text-center'>
            <h3 className='text-blue-500 font-medium text-sm mb-3'>{welcomeMessage}</h3>
            <h1 className='text-4xl font-bold mb-3'>{title}</h1>
            <p className='text-sm text-gray-500 font-medium'>{description}</p>

            <button onClick={handleGoogleSignIn} className="flex items-center justify-center gap-1 border border-blue-100 px-4 py-3 rounded-lg cursor-pointer mt-8 w-full">
                <img className='w-8' src="https://i.ibb.co.com/whS1vc78/Google-Icons-09-1024.webp" alt="" />
                <span className="text-sm font-medium hover:text-blue-600">Log in with Google</span>
            </button>

            <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-4 text-gray-700">Or continue with</span>
                <div className="flex-grow h-px bg-gray-300"></div>
            </div>
        </div>
    );
};

export default WelcomeAuth;