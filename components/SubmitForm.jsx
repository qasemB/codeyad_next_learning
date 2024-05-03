'use client'
import { useFormStatus } from 'react-dom'
import { ImSpinner2 } from "react-icons/im";

const SubmitForm = () => {
    const { pending } = useFormStatus()
    return (
        <button className='rounded-full w-full bg-blue-600 h-12 text-white flex justify-center items-center disabled:opacity-50'
        disabled={pending}
        >
            {pending ? (<ImSpinner2 className='animate-spin' />) : (<span>ورود</span>)}
        </button>
    );
};

export default SubmitForm;