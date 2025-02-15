import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

// Public Pages
import HomePage from '../pages/public/HomePage';
import Contact from '../pages/public/Contact';
import Pricing from '../pages/public/Pricing';
import FindJobs from '../pages/public/FindJobs';
import JobDetails from '../pages/public/JobDetails';

// Not Found Pages
import NotFound from '../pages/notFound/NotFound';

// Auth Pages
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import PasswordRecovery from '../pages/auth/PasswordRecovery';

import Settings from '../pages/Dashboard/Settings';
import Profile from '../pages/Dashboard/Profile';
import ManageCandidates from '../pages/Dashboard/Recruiter/ManageCandidates';
import PostJob from '../pages/Dashboard/Recruiter/PostJob';
import AdminDashboard from '../pages/Dashboard/Admin/AdminDashboard';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers';
import ManageJobs from '../pages/Dashboard/Admin/ManageJobs';
import Analytics from '../pages/Dashboard/Admin/Analytics';
import JobSeekerDashboard from '../pages/Dashboard/JobSeekers/JobSeekerDashboard';
import SaveJobs from '../pages/Dashboard/JobSeekers/SaveJobs';
import AppliedJobs from '../pages/Dashboard/JobSeekers/AppliedJobs';
import RecruiterHome from '../pages/Dashboard/Recruiter/RecruiterHome';
import ProtectedRoute from './ProtectedRoute';
import DashboardLayout from '../layout/DashboardLayout';
import Recruiter from '../pages/public/Recruiter';
import Candidate from '../pages/public/Candidate';
import JobsFind from '../pages/Dashboard/JobSeekers/BrowseJobs'
import ManagePostedJobs from '../pages/Dashboard/Recruiter/ManagePostedJobs';


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
                path: '/pricing',
                element: <Pricing />
            },
            {
                path: '/jobs',
                element: <FindJobs />
            },
            {
                path: '/recruiters',
                element: <Recruiter />
            },
            {
                path: '/candidates',
                element: <Candidate />
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
    },
    {
        path: '/dashboard',
        element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
        errorElement: <NotFound />,
        children: [
    
            // Admin Routes
            {
                path: 'admin/dashboard',
                element: <AdminDashboard />
            },
            {
                path: 'admin/manage-users',
                element: <ManageUsers />
            },
            {
                path: 'admin/manage-jobs',
                element: <ManageJobs />
            },
            {
                path: 'admin/analytics',
                element: <Analytics />
            },
            // Job Seeker Routes
            {
                path: 'job-seeker/dashboard',
                element: <JobSeekerDashboard />
            },
            {
                path: 'job-seeker/browse-jobs',
                element: <JobsFind />
            },
            {
                path: 'job-seeker/saved-jobs',
                element: <SaveJobs />
            },
            {
                path: 'job-seeker/applied-jobs',
                element: <AppliedJobs />
            },
            // Recruiter Routes
            {
                path: 'recruiter/home',
                element: <RecruiterHome />
            },
            {
                path: 'recruiter/post-job',
                element: <PostJob />
            },
            {
                path: 'recruiter/manage-jobs',
                element: <ManagePostedJobs />
            },
            {
                path: 'recruiter/manage-candidates',
                element: <ManageCandidates />
            },
            {
                path: 'recruiter/analytics',
                element: <Analytics />
            },
            // Common Routes for All Roles
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'settings',
                element: <Settings />
            }
        ]
    }
]);

export default router;