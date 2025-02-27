import React from 'react'
import Gallery from './Gallery'

const GallerySection = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center py-20'>
            <div className='flex gap-20 font-bacasime text-6xl text-text'>
                <h1>Aesthetics</h1>
                <h1>Style</h1>
                <h1>Quality</h1>
            </div>
            <h1 className='text-5xl font-bacasime text-text mt-4'>are the three basic components of our work</h1>

            <Gallery />

            <div className='flex gap-20 font-bacasime text-6xl text-text'>
                <h1>Beautiful</h1>
                <h1>Affordable</h1>
                <h1>Trusted</h1>
            </div>
        </div>
    )
}

export default GallerySection