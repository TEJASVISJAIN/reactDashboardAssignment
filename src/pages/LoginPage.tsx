import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const LoginPage: React.FC = () => {
  const { signInWithGoogle, currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background text-text">
        <div>Loading...</div>
      </div>
    );
  }

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="w-full max-w-sm p-8 space-y-8 bg-card rounded-2xl shadow-lg text-center">
        <div>
          <h2 className="text-2xl font-bold text-text">Welcome Back</h2>
          <p className="mt-2 text-textSecondary">Sign in to continue to your dashboard</p>
        </div>
        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center py-3 px-4 bg-background border border-border rounded-lg text-text font-semibold hover:bg-border transition-colors"
        >
          <FcGoogle className="mr-3" size={24} />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
