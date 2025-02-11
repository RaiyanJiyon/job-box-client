import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

// Public Pages
import HomePage from '../pages/public/HomePage';
import FindJobs from '../pages/FindJobs';
import NotFound from '../pages/notFound/NotFound';

// Auth Pages
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import PasswordRecovery from '../pages/auth/PasswordRecovery';
import Contact from '../pages/Contact';
import JobDetails from '../pages/JobDetails';



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/jobs',
                element: <FindJobs />
            },
            {
                path: '/job-details/:id',
                element: <JobDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            // Auth Routes
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'recover-password',
                element: <PasswordRecovery />
            },
            // Not Found Route
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);

export default router;