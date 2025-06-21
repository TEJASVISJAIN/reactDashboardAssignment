# Data Visualization Platform

A modern, responsive dashboard application built with React and TypeScript, featuring Firebase authentication and a component-based UI.

**Live Demo:** [https://testing-dashboard-eb1a7.web.app](https://testing-dashboard-eb1a7.web.app)

---

## Features Implemented

*   **Firebase Google Authentication:** Secure user login and logout functionality using Google accounts (`signInWithPopup`).
*   **Protected Routes:** The main dashboard is a protected route, accessible only to authenticated users. Unauthenticated users are redirected to the login page.
*   **Component-Based UI:** Built with reusable React components, including:
    *   A persistent sidebar for navigation.
    *   A dynamic header.
    *   An interactive modal for editing variables.
*   **Responsive Design:** The UI is designed with Tailwind CSS to be fully responsive and adapt to various screen sizes.

---

## Local Development Instructions

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

*   **Node.js** (v20.0.0 or higher recommended to avoid CLI compatibility issues)
*   **npm** (comes with Node.js)
*   **Git**

### Setup & Installation

1.  **Clone the Repository**
    ```bash
    git clone <your-repository-url>
    cd data-viz-platform
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**
    This project requires Firebase credentials to connect to the backend.

    *   Create a `.env` file in the root of the project:
        ```bash
        touch .env
        ```
    *   Add the following environment variables to the `.env` file, replacing the placeholder values with your actual Firebase project configuration. You can find these in your Firebase project settings.

        ```
        VITE_FIREBASE_API_KEY="AIza..."
        VITE_FIREBASE_AUTH_DOMAIN="your-project-id.firebaseapp.com"
        VITE_FIREBASE_PROJECT_ID="your-project-id"
        VITE_FIREBASE_STORAGE_BUCKET="your-project-id.appspot.com"
        VITE_FIREBASE_MESSAGING_SENDER_ID="1234567890"
        VITE_FIREBASE_APP_ID="1:1234567890:web:abcdef123456"
        ```
    *   **Note:** The application code in `src/firebase.ts` will need to be updated to read these environment variables instead of using the hardcoded `firebaseConfig` object.

4.  **Run the Development Server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## Technical Decisions & Trade-offs

*   **Framework/Tooling:**
    *   **React & Vite:** Chosen for its fast development server, modern tooling, and efficient production builds.
    *   **TypeScript:** Used to add static typing, which improves code quality, reduces runtime errors, and enhances developer experience.
    *   **Tailwind CSS:** A utility-first CSS framework was used to enable rapid and consistent UI development directly within the component files.

*   **Authentication:**
    *   Initially, `signInWithRedirect` was used. This caused issues with navigation in the React single-page application (SPA) environment due to the full-page reload.
    *   **Trade-off:** Switched to `signInWithPopup` which provides a smoother user experience within an SPA and resolves the navigation issue by not reloading the entire page, making state management simpler.

*   **State Management:**
    *   **React Context API (`AuthContext`):** The built-in Context API was used to manage the global authentication state (current user, loading status). This approach is lightweight and sufficient for the current scale of the application, avoiding the boilerplate and complexity of external libraries like Redux.

---

## Known Limitations

*   **Firebase CLI Version:** The latest Firebase CLI requires Node.js v20+. The project was developed using an older version of the CLI (`v13`) to maintain compatibility with Node.js v18. Upgrading Node.js is recommended for long-term stability.
*   **Static Dashboard:** The main dashboard UI is in place, but it currently displays static data. No actual data visualization logic is implemented.
*   **Incomplete Modal Functionality:** In the "Edit Variables" modal, the "Autofill" and "Rerun" buttons are placeholders and do not have functionality.
*   **Basic Error Handling:** Client-side error handling is minimal. For example, login failures from Firebase are logged to the console but not displayed to the user with a friendly message.

---

## Time Spent

*   **Total Estimated Time:** Approximately **2.5 hours**.
    *   This includes initial project analysis, debugging the login and Firebase configuration issues, fixing build errors, setting up deployment, and creating this documentation.
