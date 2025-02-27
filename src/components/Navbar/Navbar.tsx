"use client"
import { LucidePhoneOutgoing } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-20 fixed top-0 z-50 flex justify-between items-center bg-background px-20'>
            <img src="/Logos/logo.png" alt="logo" className='h-full' />
            <div className='h-full flex justify-center items-center gap-20'>
                <a href='#home' className='text-text font-bacasime text-2xl'>Home</a>
                <a href='#home' className='text-text font-bacasime text-2xl'>Gallery</a>
                <a href='#home' className='text-text font-bacasime text-2xl'>Contact Us</a>
            </div>
            <div className='h-full gap-4 flex justify-center items-center'>
                <LucidePhoneOutgoing />
                <h1 className='text-text font-bacasime text-2xl'>+1 (360) 9414268</h1>
            </div>
        </div>
    )
}

export default Navbar