"use client"
import register from '@/app/action/register';
import React from 'react';
import toast from 'react-hot-toast';

const page = () => {

    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password })
        try {
            const res = await register({ email, password })
            console.log("This is the result:", res)

            if (res.success == true) {
                toast.success("Register Successful")
            } else {
                toast.error(`${res.message}`)
            }
        }
        catch (error) {
            console.log("This is the error:", error)
            toast.error("Something wrong")
        }


    }
    return (
        <div className='min-h-screen place-content-center text-center'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">This is the next js auth!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" name='email' placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" name='password' placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Sign Up</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;