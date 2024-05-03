'use client'
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'next/navigation';
import { TbHomeCheck } from "react-icons/tb";

const HomePage = () => {
    const router = useRouter()
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <TbHomeCheck className='size-20'/>
            <h1 className='my-5'>صفحه اصلی</h1>
            <CustomButton className='bg-green-400 w-64' onClick={()=>router.push("/login")}>صفحه ورود</CustomButton>
        </div>
    );
}

export default HomePage;