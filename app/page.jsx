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
            <CustomButton className='bg-blue-400 w-64 mt-10' onClick={()=>router.push("/gallery")}>صفحه گالری</CustomButton>
            <CustomButton className='bg-pink-400 w-64 mt-10' onClick={()=>router.push("/about")}>درباره ما</CustomButton>
        </div>
    );
}

export default HomePage;