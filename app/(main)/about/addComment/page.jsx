import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className="animate-fade fixed w-full h-screen top-0 left-0 bg-[#ffffff] flex justify-center items-center">
            <form className="w-1/3 bg-white rounded-lg p-5 shadow-2xl border">
                <h3 className="text-center my-5">ثبت نظر</h3>
                <div className="flex flex-col my-5">
                    <label>نام کاربر</label>
                    <input type="text" placeholder="از حروف فارسی استفاده کنید" className="rounded-md border p-4" />
                </div>
                <div className="flex flex-col my-5">
                    <label>متن پیام</label>
                    <textarea cols={20} placeholder="متن خود را تایپ کنید..." className="rounded-md border p-4"></textarea>
                </div>
                <Link href={"/about"}>
                    <button type="button" className="rounded-full mt-5  bg-cyan-500 text-white px-5 py-3 w-full"
                    >ثبت نظر</button>
                </Link>
            </form>
        </div>
    );
};

export default page;