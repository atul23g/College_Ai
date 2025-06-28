import { redirect } from 'next/navigation';
import { onAuthenticateUser } from '@/actions/user';
import { currentUser } from '@clerk/nextjs/server';

const AuthCallbackPage = async () => {
    try {
        // First check if user is authenticated with Clerk
        const clerkUser = await currentUser();
        
        if (!clerkUser) {
            // If no Clerk user, redirect to sign-in
            return redirect('/sign-in');
        }

        // If Clerk user exists, authenticate with our database
        const auth = await onAuthenticateUser();
        
        if (auth.status === 200 || auth.status === 201) {
            // Success - redirect to dashboard
            return redirect('/dashboard');
        } else {
            // Database error - redirect to sign-in with error
            console.error('Database authentication failed:', auth.status);
            return redirect('/sign-in?error=auth_failed');
        }
    } catch (error) {
        console.error('Callback error:', error);
        return redirect('/sign-in?error=callback_error');
    }
}

export default AuthCallbackPage;