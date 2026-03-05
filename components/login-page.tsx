'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LoginPageProps {
  onLogin: (enrollmentNumber: string, password: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!enrollmentNumber || !password) {
      setError('Please fill in all fields');
      return;
    }

    onLogin(enrollmentNumber, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4">
      {/* Background blur effect */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22%3E%3Crect fill=%22%23f5f5f5%22 width=%221200%22 height=%22800%22/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        {/* Header */}
        <h1 className="text-center text-2xl font-bold text-blue-600 mb-8 tracking-wide">
          — STUDENT LOGIN —
        </h1>

        {/* GLS University Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-900 p-4 rounded-lg w-full flex items-center justify-center min-h-32">
            <div className="text-center">
              <div className="text-white font-bold text-lg mb-1">GLS</div>
              <div className="text-white text-sm font-semibold">UNIVERSITY</div>
              <div className="text-white text-xs mt-2">
                Promoted By Gujarat Law Society Since 1927
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Enrollment Number Field */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-400 p-4 flex items-center justify-center min-w-16">
              <span className="text-white text-xl">👤</span>
            </div>
            <input
              type="text"
              placeholder="Enrollment Number"
              value={enrollmentNumber}
              onChange={(e) => setEnrollmentNumber(e.target.value)}
              className="flex-1 px-4 py-3 focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-400 p-4 flex items-center justify-center min-w-16">
              <span className="text-white text-xl">🔐</span>
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 px-4 py-3 focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Forgot password
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded-lg transition-colors text-lg"
          >
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}
