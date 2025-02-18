# **Job Box**  
![JobBox Banner](https://i.ibb.co.com/PvydShRF/project-banner.png)

**JobBox** is a modern job portal platform that connects **job seekers, recruiters, and administrators**. It provides a seamless experience for job seekers to browse and apply for jobs, recruiters to post and manage job listings, and administrators to oversee platform operations.

🚀 **Live Demo:** [JobBox](https://job-box1.netlify.app/)

---

## 📖 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Configuration (.env)](#configuration-env)
- [Usage](#usage)
- [User Roles](#user-roles)
- [Admin Dashboard](#admin-dashboard)
- [Live Demo & Repository](#live-demo--repository)

---

<h2 id="features" styles="hidden">✨ Features</h2>

- **Role-Based Authentication** – Users are categorized as **Admin, Recruiter, and Job Seeker**.
- **Job Management** – Recruiters can post, update, and delete job listings.
- **Job Applications** – Job seekers can browse and apply for jobs.
- **Saved Jobs** – Job seekers can save jobs for later.
- **Recruiter Dashboard** – Manage job postings and view applied candidates.
- **Admin Panel** – Manage users and job listings across the platform.
- **Real-time Notifications** – Alerts for job applications and recruiter updates.
- **Secure Authentication** – Integrated Firebase authentication for user management.
- **Responsive UI** – Built with **React and Tailwind CSS** for a smooth user experience.

---

<h2 id="technology-stack" styles="hidden">🛠️ Technology Stack</h2>

| Category           | Technologies Used                                           |
| ------------------ | ----------------------------------------------------------- |
| **Frontend**       | React, React Router, Tailwind CSS, MUI, ShadCN UI, Recharts |
| **Backend**        | Firebase Authentication (for user authentication)           |
| **State Management** | React Context API |
| **API Handling**   | Axios                                                       |
| **Notifications**  | SweetAlert2, React Toastify                                |
| **Hosting**        | Netlify                       |

---

<h2 id="installation" styles="hidden">🛠 Installation</h2>

### Prerequisites

- **Node.js** (>= 18)
- **Firebase Account** (for authentication)

### Steps

1. **Clone the repository**

   ```sh
   git clone https://github.com/RaiyanJiyon/job-box-client.git
   cd job-box-client
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables** (see `.env.local` below)

4. **Run the development server**
   ```sh
   npm run dev
   ```

---

<h2 id="configuration-env" styles="hidden">⚙️ Configuration (.env)</h2>

Create a `.env` file in the root directory and configure the following:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

🚨 **Important:** Never expose your `.env` file in public repositories. Use `.gitignore` to keep it secure.

---

<h2 id="usage" styles="hidden">🚀 Usage</h2>

### User Registration & Authentication
- Users can sign up and log in using **Firebase Authentication**.

### Job Seekers
1. Browse all job postings.
2. Save jobs for later.
3. Apply for jobs.
4. View applied jobs in their dashboard.

### Recruiters
1. Post job listings.
2. Manage their job postings.
3. View all job seekers who applied to their jobs.

### Admins
1. Manage users (promote, demote, or delete).
2. Manage job postings (approve or remove).
3. View platform analytics.

---

<h2 id="user-roles" styles="hidden">👤 User Roles</h2>

| Role       | Permissions |
|------------|------------|
| **Admin**  | Manage users, delete job posts, view all applications |
| **Recruiter** | Post jobs, manage job applications, update & delete listings |
| **Job Seeker** | Browse, save, and apply for jobs |

---

<h2 id="admin-dashboard">📊 Admin Dashboard</h2>

The admin dashboard provides tools to:
- View all **job applications**.
- Manage **users and roles**.
- Delete inappropriate **job postings**.
- Oversee platform statistics.

---

<h2 id="live-demo--repository">🌍 Live Demo & Repository</h2>

- **Live Site:** [JobBox](https://job-box1.netlify.app/)
- **GitHub Repository:** [GitHub Link](https://github.com/RaiyanJiyon/job-box-client.git)

---

🚀 **Start exploring job opportunities or hiring the right talent with JobBox!** 💼🎯