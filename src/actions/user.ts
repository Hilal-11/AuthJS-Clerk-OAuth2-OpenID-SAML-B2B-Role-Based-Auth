"use server"

import connectDB from "@/lib/db"

const register = async (formData: FormData) => {
    const firstname = formData.get("first-name") as string
    const lastname = formData.get("last-name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if(!firstname || !lastname || !email || !password) {
        throw new Error("All fields are required")
    }


    await connectDB()

    // check if user already exists

    // hash password

    // craete user

    // redirect user to login

    


}
const login = async (formData: FormData) => {
    const username = formData.get("username") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if(!username || !email || !password) {
        throw new Error("All fields are required")
    }
}

export { register, login }