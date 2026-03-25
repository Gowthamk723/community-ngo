'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();
  
  // Only show on non-auth pages and when not in a loading state
  const isAuthPage = ['/login', '/register', '/forgot-password'].includes(pathname);
  const isAuthLoading = status === 'loading';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render on auth pages or while auth state is loading
  if (isAuthPage || isAuthLoading) return null;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">NGO FutureProof</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/mentorship" 
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith('/mentorship') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Mentorship
            </Link>
            <Link 
              href="/funding-portal" 
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith('/funding-portal') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Funding
            </Link>
            <Link 
              href="/community-impact" 
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith('/community-impact') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Community Impact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {status === 'authenticated' ? (
              <>
                <Link 
                  href="/dashboard" 
                  className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
