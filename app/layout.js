import AuthProvider from "@/components/AuthProvider";
import "./globals.css";

export const metadata = {
  title: "Codeyad Next.js Education",
  description: "React Framework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      <body dir='rtl' className='h-full'>
        <div className='h-full bg-gradient-to-r from-pink-300 from-10% via-orange-300 via-30% to-red-300 to-90%'>
          <div className='h-full w-full'>
            <AuthProvider>
              {children}
            </AuthProvider>
          </div>
        </div>
      </body>
    </html>
  );
}


