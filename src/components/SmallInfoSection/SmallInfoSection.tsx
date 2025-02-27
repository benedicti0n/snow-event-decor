import { LucideInstagram } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SmallInfoSection = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center font-bacasime text-2xl md:text-3xl text-center pt-12 md:pt-20 px-8 bg-background'>
            <h1>Floral | Decor | Corporate Event | Rentals</h1>
            <h1>Wedding Party | Custom Fabrication</h1>

            <h1 className='mt-4'>We serve Sacramento, San Jose, Napa, Lake Tahoe.</h1>

            <h1 className='mt-4 flex items-center justify-center gap-2 text-2xl md:text-3xl'><LucideInstagram /><a href='https://www.instagram.com/snow_decor/' target="_blank" rel="noopener noreferrer"> @snow_decor</a></h1>

            <Image src="/Logos/snowdrop.png" alt="snowdropFlower" height={4096} width={4096} className='w-32 md:w-64 py-8' />
        </div>
    )
}

export default SmallInfoSection