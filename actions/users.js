'use server'

import { revalidatePath } from "next/cache"

export const handleUpdatePath = async (path)=>{
    revalidatePath(path)
}