const UserPanelLayout = ({ children , comment, course, wallet}) => {
    return (
        <div className='h-full w-full p-10'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
                <div className="user_panel_cards">
                    {wallet}
                </div>
                <div className="user_panel_cards">
                    {comment}
                </div>
                <div className="user_panel_cards lg:col-span-2">
                    {course}
                </div>
            </div>
            {children}
        </div>
    );
};

export default UserPanelLayout;