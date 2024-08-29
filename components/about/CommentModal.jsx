const CommentModal = ({setShowaModal}) => {
    return (
        <div className="animate-fade fixed w-full h-screen top-0 left-0 bg-[#00000066] flex justify-center items-center">
            <form className="w-1/3 bg-white rounded-lg p-5">
                <h3 className="text-center my-5">ثبت نظر</h3>
                <div className="flex flex-col my-5">
                    <label>نام کاربر</label>
                    <input type="text" placeholder="از حروف فارسی استفاده کنید" className="rounded-md border p-4" />
                </div>
                <div className="flex flex-col my-5">
                    <label>متن پیام</label>
                    <textarea cols={20} placeholder="متن خود را تایپ کنید..." className="rounded-md border p-4"></textarea>
                </div>
                <button type="button" className="rounded-full mt-5  bg-cyan-500 text-white px-5 py-3 w-full" 
                onClick={()=>setShowaModal(false)}>ثبت نظر</button>
            </form>
        </div>
    );
};

export default CommentModal;