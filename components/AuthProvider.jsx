'use client'
import { GoogleOAuthProvider } from '@react-oauth/google';

const AuthProvider = ({ children }) => {
    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_Google_CLIENT_ID}>{children}</GoogleOAuthProvider>
    );
};

export default AuthProvider;