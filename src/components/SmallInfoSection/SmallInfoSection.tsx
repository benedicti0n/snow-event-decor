import { LucideInstagram } from 'lucide-react'
import React from 'react'

const SmallInfoSection = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center font-bacasime text-3xl pt-20 bg-background'>
            <h1>Floral | Decor | Corporate Event | Rentals</h1>
            <h1>Wedding Party | Custom Fabrication</h1>

            <h1 className='mt-4'>We serve Sacramento, San Jose, Napa, Lake Tahoe.</h1>

            <h1 className='mt-4 flex items-center justify-center gap-2'><LucideInstagram /> @snow_decor.</h1>

            <img src="/Logos/snowdrop.png" alt="" />
        </div>
    )
}

export default SmallInfoSection