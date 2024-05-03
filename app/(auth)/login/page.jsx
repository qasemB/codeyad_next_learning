'use client'
import ToggleBtn from '@/components/ToggleButton';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GrUserAdmin } from 'react-icons/gr';

const Login = () => {    
    const router = useRouter()
    return (
        <div className='flex justify-center items-center h-full w-full px-2  lg:px-10'>
            <div className='w-full text-gray-600 bg-gradient-to-b from-gray-300 to-gray-100 p-3 rounded-lg border-2 shadow'>
                
                <div className='flex justify-center items-center my-5'><GrUserAdmin  className="size-10"/></div>
                <h1 className='text-center my-5'>فرم ورود</h1>
                <div>
                    <label>شماره موبایل:</label>
                    <input name="phone" type='number' className='px-4 w-full border-gray-300 border-2 rounded-full h-12 focus:outline-blue-300'/>
                </div>
                <div className='mt-5'>
                    <label>رمز عبور:</label>
                    <input name="password" type='password' className='px-4 w-full border-gray-300 border-2 rounded-full h-12 focus:outline-blue-300' />
                </div>
                <div className='mt-5'>
                    <ToggleBtn name="remember" title="مرا بخاطر بسپار" />
                </div>

                <div className='my-6 px-4'>
                </div>
                    <button className='rounded-full w-full bg-blue-600 h-12 text-white'onClick={()=>router.push("userpanel")}>ورود</button>
            </div>
        </div>
    );
};

export default Login;
