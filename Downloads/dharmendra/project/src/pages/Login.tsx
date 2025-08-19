import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Lock, KeyRound } from 'lucide-react';

const Login: React.FC = () => {
  const { login, expectedHint } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation() as { state?: { from?: string } } as any;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(password);
    if (ok) {
      const from = (location.state && (location.state as any).from) || '/admin';
      navigate(from, { replace: true });
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-20">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
        <div className="flex items-center justify-center mb-6">
          <Lock className="w-10 h-10 text-saffron-600" />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">Admin Access</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">Enter the admin password to continue.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter password" />
            </div>
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button type="submit" className="w-full bg-saffron-600 hover:bg-saffron-700 text-white font-medium py-2 px-4 rounded-md transition-colors">Login</button>

        </form>
      </div>
    </div>
  );
};

export default Login;


