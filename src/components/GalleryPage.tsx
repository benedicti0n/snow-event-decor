'use client'
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';

const GalleryPage = () => {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch('/api/images');
                const data = await res.json();
                if (data.success) {
                    setImages(data.images.map((img: any) => img.image)); // Extract base64 images
                } else {
                    console.error('Error fetching images:', data.error);
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className='w-full flex flex-col justify-center items-center py-12 md:py-20'>
            <Navbar />
            <h1 className='flex font-bacasime text-3xl md:text-6xl text-text'>Gallery</h1>

            {loading ? (
                <p className="text-center mt-4">Loading images...</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 px-4">
                    {images.length > 0 ? (
                        images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="w-full h-40 object-cover rounded-md shadow-md"
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center">No images found</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
