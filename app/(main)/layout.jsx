const AuthLayout = ({ children }) => {
    return (
        <div className='h-full bg-gradient-to-r from-purple-400 from-10% via-pink-300 via-30% to-rose-400 to-90%'>
            <div className='h-full w-full'>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;