import React from 'react';
import useAuth from '../../../hooks/useAuth';
import SuccessToaster from '../Toaster/SuccessToaster';
import ErrorToaster from '../Toaster/ErrorToaster';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { updateProfile } from 'firebase/auth';

const WelcomeAuth = ({ welcomeMessage, title, description }) => {
    const { signInUserWithGoogle } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInUserWithGoogle();
            const user = result?.user;

            if (user) {
                let existingUser = null;

                try {
                    // Check if the user already exists
                    const response = await axiosPublic.get(`/users?email=${user.email}`);
                    existingUser = response.data;
                } catch (error) {
                    if (error.response && error.response.status === 404) {
                        existingUser = null; // ✅ Handle 404 gracefully
                    } else {
                        throw error; // Other errors should be thrown
                    }
                }

                if (!existingUser) {
                    // Create a new user with "job seeker" role
                    const newUser = {
                        name: user.displayName,
                        email: user.email,
                        username: user.displayName,
                        photoURL: user.photoURL,
                        role: "job seeker", // Default role = Job Seeker
                    };

                    await axiosPublic.post('/users', newUser);
                }

                await updateProfile(user, {
                    displayName: user.displayName,
                    photoURL: user.photoURL
                });

                SuccessToaster("Successfully signed in with Google.");
                navigate('/');
            }
        } catch (error) {
            ErrorToaster(error.message);
        }
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