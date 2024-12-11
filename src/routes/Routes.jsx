import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

// Public Pages
import HomePage from '../pages/public/HomePage';
import NotFound from '../pages/notFound/NotFound';

// Auth Pages
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import PasswordRecovery from '../pages/auth/PasswordRecovery';

// Job Pages
import AllJobs from '../pages/jobs/AllJobs';
import JobDetails from '../pages/jobs/JobDetails';
import AddJob from '../pages/jobs/AddJob';
import UpdateJob from '../pages/jobs/UpdateJob';

// Application Pages
import ApplyForJob from '../pages/applications/ApplyForJob';
import MyApplications from '../pages/applications/MyApplications';

// Employer Pages
import MyJobPosts from '../pages/employers/MyJobPosts';
import ReviewApplications from '../pages/employers/ReviewApplications';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
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
            // Job Routes
            {
                path: 'jobs',
                element: <AllJobs />
            },
            {
                path: 'jobs/:jobId',
                element: <JobDetails />
            },
            {
                path: 'jobs/new',
                element: (
                    <ProtectedRoute>
                        <AddJob />
                    </ProtectedRoute>
                )
            },
            {
                path: 'jobs/:jobId/edit',
                element: (
                    <ProtectedRoute>
                        <UpdateJob />
                    </ProtectedRoute>
                )
            },
            // Application Routes
            {
                path: 'jobs/:jobId/apply',
                element: (
                    <ProtectedRoute>
                        <ApplyForJob />
                    </ProtectedRoute>
                )
            },
            {
                path: 'my-applications',
                element: (
                    <ProtectedRoute>
                        <MyApplications />
                    </ProtectedRoute>
                )
            },
            // Employer Routes
            {
                path: 'my-job-posts',
                element: (
                    <ProtectedRoute>
                        <MyJobPosts />
                    </ProtectedRoute>
                )
            },
            {
                path: 'review-applications/:jobId',
                element: (
                    <ProtectedRoute>
                        <ReviewApplications />
                    </ProtectedRoute>
                )
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