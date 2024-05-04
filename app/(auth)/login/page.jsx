'use client'
import { loginAction } from '@/actions/authAction';
import SubmitForm from '@/components/SubmitForm';
import ToggleBtn from '@/components/ToggleButton';
import React from 'react';
import { GrUserAdmin } from 'react-icons/gr';
import { useFormState } from 'react-dom'

const Login = () => {
    const [state, formAction] = useFormState(loginAction, {error: "", success: false})
    console.log(state);
    return (
        <div className='flex justify-center items-center h-full w-full px-2  lg:px-10'>
            <form action={formAction} className='w-full text-gray-600 bg-gradient-to-b from-gray-300 to-gray-100 p-3 rounded-lg border-2 shadow'>

                <div className='flex justify-center items-center my-5'><GrUserAdmin className="size-10" /></div>
                <h1 className='text-center my-5'>فرم ورود</h1>
                {state.error && (<h1 className='text-center my-5'>{state.error}</h1>)}
                <div>
                    <label>شماره موبایل:</label>
                    <input name="phone" type='number' className='px-4 w-full border-gray-300 border-2 rounded-full h-12 focus:outline-blue-300' />
                    <small className='text-red-500 block'>{state.errors?.phone?.at(0) || ""}</small>
                </div>
                <div className='mt-5'>
                    <label>رمز عبور:</label>
                    <input name="password" type='password' className='px-4 w-full border-gray-300 border-2 rounded-full h-12 focus:outline-blue-300' />
                    <small className='text-red-500 block'>{state.errors?.password.at(0) || ""}</small>
                </div>
                <div className='mt-5'>
                    <ToggleBtn value={1} name="remember" title="مرا بخاطر بسپار" />
                </div>

                <div className='my-6 px-4'>
                    <SubmitForm/>
                </div>
            </form>
        </div>
    );
};

export default Login;
