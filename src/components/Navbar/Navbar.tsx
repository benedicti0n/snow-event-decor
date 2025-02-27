"use client";
import { LucidePhoneOutgoing, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-20 fixed top-0 z-50 flex justify-between items-center bg-background px-4 md:px-20">
            {/* Mobile Navbar */}
            <div className="h-full flex justify-between items-center w-full md:hidden">
                <div className="flex items-center gap-3 md:gap-4">
                    <LucidePhoneOutgoing className="h-5 w-5" />
                    <h1 className="text-text font-bacasime text-xl md:text-2xl"><a href="tel:+13609414268">+1 360 9414268</a></h1>
                </div>
                <Image src="/Logos/logo.png" alt="logo" width={4096} height={4096} className="h-20 w-20" />
                {/* Hamburger menu button */}
                <button onClick={() => setIsOpen(!isOpen)} className="text-text">
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-background shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
                    <a href="#home" className="text-text font-bacasime text-xl md:text-2xl">
                        Home
                    </a>
                    <a href="#gallery" className="text-text font-bacasime text-xl md:text-2xl">
                        Gallery
                    </a>
                    <a href="#contactUs" className="text-text font-bacasime text-xl md:text-2xl">
                        Contact Us
                    </a>
                </div>
            )}

            {/* Desktop Navbar */}
            <div className="h-full items-center hidden md:flex w-full justify-between">
                <Image src="/Logos/logo.png" alt="logo" width={4096} height={4096} className="h-20 w-20" />
                <div className="h-full flex justify-center items-center gap-20">
                    <a href="#home" className="text-text font-bacasime text-2xl">
                        Home
                    </a>
                    <a href="#gallery" className="text-text font-bacasime text-2xl">
                        Gallery
                    </a>
                    <a href="#contactUs" className="text-text font-bacasime text-2xl">
                        Contact Us
                    </a>
                </div>
                <div className="h-full flex gap-4 justify-center items-center">
                    <LucidePhoneOutgoing />
                    <h1 className="text-text font-bacasime text-2xl"><a href="tel:+13609414268">+1 360 9414268</a></h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
