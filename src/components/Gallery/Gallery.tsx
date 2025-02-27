"use client"
import React, { useEffect, useState } from 'react'
import PhoneGallery from './PhoneGallery'
import DesktopGallery from './DesktopGallery'

const Gallery = () => {
    const [isPhone, setIsPhone] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth < 786);
        };

        handleResize(); // Check initial size
        window.addEventListener('resize', handleResize); // Add event listener

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on unmount
        };
    }, [])

    return (
        <div className='w-full'>
            {isPhone ? <PhoneGallery /> : <DesktopGallery />}
        </div>
    )
}

export default Gallery