"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ChevronRight, Check } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';

const LoginPage = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = {
      email: '',
      password: '',
    };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        await login(formData.email, formData.password);
        setSuccess(true);
        setTimeout(() => {
          window.location.href = '/account';
        }, 2000);
      } catch (error) {
        if (error instanceof Error) {
          if (error.message.includes('Invalid credentials')) {
            setErrors(prev => ({
              ...prev,
              email: 'Invalid email or password',
              password: 'Invalid email or password'
            }));
          } else {
            alert(error.message);
          }
        } else {
          alert('An unknown error occurred');
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#03ac56] opacity-5 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#fe0000] opacity-5 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      {/* Login Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-md mx-auto">
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center bg-white p-8 rounded-xl shadow-lg border border-[#03ac56]/20"
            >
              <div className="mx-auto bg-gradient-to-r from-[#03ac56] to-[#9ed462] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <div className="bg-white text-[#03ac56] p-2 rounded-full">
                  <Check className="h-6 w-6" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Login Successful
              </h2>
              <p className="text-gray-600 mb-6">
                Redirecting to your personal dashboard...
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#b60808] to-[#fe0000] hover:from-[#fe0000] hover:to-[#b60808] text-white font-bold py-3 rounded-full transition-all duration-300"
              >
                Continue to Dashboard
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="text-center mb-8">
                <div className="mb-4">
                  <Image
                    src="/assets/logo.png"
                    alt="LCEO Logo"
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
                    Welcome Back
                  </span>
                </h2>
                <p className="text-gray-600">
                  Access your exclusive account and benefits
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#03ac56] focus:border-transparent`}
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-10 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#03ac56] focus:border-transparent`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-[#03ac56]" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-[#03ac56]" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-[#03ac56] focus:ring-[#03ac56] border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="/auth/forgot-password" className="font-medium text-[#03ac56] hover:text-[#9ed462]">
                      Forgot password?
                    </a>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#b60808] to-[#fe0000] hover:from-[#fe0000] hover:to-[#b60808] text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      <div>Login</div>
                      <ChevronRight size={18} />
                    </>
                  )}
                </motion.button>

                {/* Registration Link */}
                <div className="text-center text-sm text-gray-600">
                  Not a member yet?{" "}
                  <a href="/auth/register" className="font-medium text-[#03ac56] hover:text-[#9ed462]">
                    Create account
                  </a>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* Add these styles to your global CSS or CSS-in-JS */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;