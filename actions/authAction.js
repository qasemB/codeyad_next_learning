'use server'

import axios from "axios"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const loginAction = async (formData) => {
    const phone = formData.get("phone")
    const password = formData.get("password")
    const remember = formData.get("remember") || 0
    const res = await axios.post("https://ecomadminapi.azhadev.ir/api/auth/login", { phone, password, remember })
    if (res.status === 200) {
        const token = res.data.token
        cookies().set("loginToken", token)
        redirect("/userpanel")
    }
}