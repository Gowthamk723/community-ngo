import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Define routes that require authentication
const protectedRoutes = [
  '/dashboard',
  '/dashboard/.*',
  '/mentorship',
  '/funding-portal',
  '/community-impact'
];

// Define public routes that should be accessible without authentication
const publicRoutes = [
  '/login',
  '/register',
  '/forgot-password',
  '/api/auth/.*',
  '/_next/.*',
  '/favicon.ico'
];

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  
  // Skip middleware for public routes
  if (publicRoutes.some(route => 
    pathname === route || 
    new RegExp(`^${route.replace('*', '.*')}$`).test(pathname)
  )) {
    return NextResponse.next();
  }

  const token = await getToken({ req });
  const isAuthenticated = !!token;

  // Redirect to login if not authenticated and trying to access protected route
  if (!isAuthenticated && protectedRoutes.some(route => 
    pathname === route || 
    (route.endsWith('.*') && new RegExp(`^${route.replace('.*', '.*')}$`).test(pathname))
  )) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If user is authenticated and tries to access login/register, redirect to dashboard
  if (isAuthenticated && ['/login', '/register'].includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};