'use client'
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { SessionProvider } from "next-auth/react"

const AuthProvider = ({ children }) => {
    return (
        // <SessionProvider>{children}</SessionProvider>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_Google_CLIENT_ID}>{children}</GoogleOAuthProvider>
    );
};

export default AuthProvider;