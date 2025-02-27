import React from 'react'
import Gallery from './Gallery'

const GallerySection = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center py-12 md:py-20'>
            <div className='flex space-x-8 md:space-x-20 font-bacasime text-3xl md:text-6xl text-text'>
                <h1>Aesthetics</h1>
                <h1>Style</h1>
                <h1>Quality</h1>
            </div>
            <h1 className='text-xl md:text-5xl font-bacasime text-text md:mt-4'>are the three basic components of our work</h1>

            <Gallery />

            <div className='flex space-x-8 md:space-x-20 font-bacasime text-3xl md:text-6xl text-text'>
                <h1>Beautiful</h1>
                <h1>Affordable</h1>
                <h1>Trusted</h1>
            </div>
        </div>
    )
}

export default GallerySection