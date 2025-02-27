import React from 'react';
import { Mail, MapPin, LucidePhoneOutgoing, LucideInstagram } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <div className="bg-text text-roseGold px-12 pt-12 pb-8 md:px-20 md:pt-20 md:pb-8 rounded-t-3xl font-bacasime">
            <div className='h-full flex flex-col md:flex-row justify-between items-start'>
                {/* Logo Section */}
                <div className="h-full flex items-center justify-center mb-6 md:mb-0 ">
                    <Image src={"/Logos/footerLogo.png"} alt='footerLogo' height={3096} width={3096} className='h-20 w-20 md:h-32 md:w-32' />
                </div>

                {/* Explore Section */}
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center mb-2 gap-2">
                        <Image src={"/star.svg"} alt='icon' height={3096} width={3096} className='h-12 w-12' />
                        <h3 className="text-3xl md:text-4xl">Explore</h3>
                    </div>
                    <ul className="space-y-1 text-base md:text-xl ml-14">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='gallery'>Gallery</a></li>
                        <li><a href='contactUs'>Contact Us</a></li>
                    </ul>
                </div>

                {/* Socials Section */}
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center mb-4 gap-2">
                        <Image src={"/star.svg"} alt='icon' height={3096} width={3096} className='h-12 w-12' />
                        <h3 className="text-3xl md:text-4xl">Socials</h3>
                    </div>
                    <ul className="space-y-1 text-base md:text-xl ml-14">
                        <li className='flex justify-center items-center gap-2'>
                            <LucideInstagram size={20} />
                            <a href='https://www.instagram.com/snow_decor/' target="_blank" rel="noopener noreferrer"> @snow_decor</a>
                        </li>
                    </ul>
                </div>

                {/* Contacts Section */}
                <div>
                    <div className="flex items-center mb-4 gap-2">
                        <Image src={"/star.svg"} alt='icon' height={3096} width={3096} className='h-12 w-12' />
                        <h3 className="text-3xl md:text-4xl">Contacts</h3>
                    </div>
                    <ul className="space-y-1 text-base md:text-xl ml-14">
                        <li className="flex items-center">
                            <LucidePhoneOutgoing size={20} className="mr-2" />
                            <span><a href="tel:+13609414268">+1 360 9414268</a></span>
                        </li>
                        <li className="flex items-center">
                            <LucidePhoneOutgoing size={20} className="mr-2" />
                            <span><a href="tel:+19165414426">+1 916 5414426</a></span>
                        </li>
                        <li className="flex items-center">
                            <Mail size={20} className="mr-2" />
                            <span><a href="mailto:snoweventdecor@gmail.com">snoweventdecor@gmail.com</a></span>
                        </li>
                        <li className="flex items-start">
                            <MapPin size={20} className="mr-2 mt-1" />
                            <span>
                                <a href='https://maps.app.goo.gl/V38HWjjSg5LAzVZ79' target="_blank" rel="noopener noreferrer">
                                    4470 Duckhorn Drive,<br />
                                    Sacramento CA<br />
                                    95834, USA
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-sm mt-8 md:mt-0">
                Copyright © Some Brand Name - All rights reserved
            </div>
        </div>
    );
};

export default Footer;