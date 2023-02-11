'use client'
//
import React, { useState } from 'react';


export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    
    const handleSubmit = async (e:any) => {
        e.preventDefault();

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Sign in to <a className="text-blue-600" href="https://nextjs.org">House Of Fashion</a>
                </h1> 
                <p className="mt-3 text-2xl">
                    Get started by signing in to your account
                </p>
                <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 mt-8 text-left border border-gray-300 rounded-md shadow-md">
                    <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            className="px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="mt-4 text-sm font-medium text-gray-700">Password</label>
                        <input
                            className="px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="px-4 py-2 mt-6 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                            type="submit"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
