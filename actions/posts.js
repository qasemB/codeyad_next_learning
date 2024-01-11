'use server'

import { revalidateTag } from "next/cache"
 
export async function handleUpdateTag(tag) {
  revalidateTag(tag)
}