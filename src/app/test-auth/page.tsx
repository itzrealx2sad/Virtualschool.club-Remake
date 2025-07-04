"use client";

import React, { useState } from 'react';

export default function TestAuth() {
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    role: 'student'
  });

  const [signinData, setSigninData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const [userProfile, setUserProfile] = useState<any>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/v2/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage(`Signup successful: ${data.message}`);
        setSignupData({ email: '', password: '', first_name: '', last_name: '', role: 'student' });
      } else {
        setMessage(`Signup failed: ${data.error}`);
      }
    } catch (error) {
      setMessage('Error during signup');
    }
  };

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/v2/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signinData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage(`Signin successful: ${data.message}`);
        setToken(data.token);
        setSigninData({ email: '', password: '' });
      } else {
        setMessage(`Signin failed: ${data.error}`);
      }
    } catch (error) {
      setMessage('Error during signin');
    }
  };

  const getProfile = async () => {
    if (!token) {
      setMessage('Please sign in first');
      return;
    }

    try {
      const response = await fetch('/v2/api/user/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      
      if (response.ok) {
        setUserProfile(data.user);
        setMessage('Profile retrieved successfully');
      } else {
        setMessage(`Failed to get profile: ${data.error}`);
      }
    } catch (error) {
      setMessage('Error getting profile');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Authentication Test</h1>
        
        {message && (
          <div className="mb-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded">
            {message}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Signup Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={signupData.email}
                  onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  value={signupData.password}
                  onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  value={signupData.first_name}
                  onChange={(e) => setSignupData({...signupData, first_name: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  value={signupData.last_name}
                  onChange={(e) => setSignupData({...signupData, last_name: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  value={signupData.role}
                  onChange={(e) => setSignupData({...signupData, role: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Signin Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Sign In</h2>
            <form onSubmit={handleSignin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={signinData.email}
                  onChange={(e) => setSigninData({...signinData, email: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  value={signinData.password}
                  onChange={(e) => setSigninData({...signinData, password: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
              >
                Sign In
              </button>
            </form>

            {token && (
              <div className="mt-4">
                <button
                  onClick={getProfile}
                  className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
                >
                  Get Profile
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Profile Display */}
        {userProfile && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">User Profile</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong>ID:</strong> {userProfile.id}
              </div>
              <div>
                <strong>Email:</strong> {userProfile.email}
              </div>
              <div>
                <strong>First Name:</strong> {userProfile.first_name}
              </div>
              <div>
                <strong>Last Name:</strong> {userProfile.last_name}
              </div>
              <div>
                <strong>Role:</strong> {userProfile.role}
              </div>
              <div>
                <strong>Created:</strong> {new Date(userProfile.created_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 