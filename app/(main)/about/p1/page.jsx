import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='text-center w-full py-10'>
            صفحه p1
            <div className="flex justify-center w-full mt-4">
                <Link href={"/about/honors"} className="rounded-full bg-cyan-500 text-white px-5 py-3 flex justify-center w-1/6">افتخارات</Link>
            </div>
        </div>
    );
};

export default page;