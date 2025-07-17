"use server"
import { dbConnect, NextJa_Auth } from '@/lib/dbConnect';
import React from 'react';
import bcrypt from "bcrypt";

const register = async (payload) => {
    const payloadData = payload
    console.log("This is the payload data", payloadData)
    const db = dbConnect(NextJa_Auth.user_test)

    try {

        const { email, password } = payload

        if (!email && !password) {
            return { success: false, message: "Email and Password are required" }
        }

        const userExist = await db.findOne({ email })
        if (userExist) {
            return { success: false, message: "User Already Exist" }
        }

        if (!userExist) {
            const hashPassword = await bcrypt.hash(password, 10)
            payload.password = hashPassword
            const result = await db.insertOne(payload)
            return { success: true, result }
        }
    }
    catch {
        return { success: false, fuck: "yes" }
    }


};

export default register;