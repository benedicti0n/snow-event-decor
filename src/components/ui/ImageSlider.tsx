"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
    images: {
        url: string;
        alt: string;
    }[];
    autoplayInterval?: number;
    showControls?: boolean;
    showIndicators?: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
    images,
    autoplayInterval = 5000,
    showControls = true,
    showIndicators = true,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToNext = useCallback(() => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

        // Reset transition state after animation completes
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500); // Match this with the CSS transition duration
    }, [images.length, isTransitioning]);

    const goToPrevious = useCallback(() => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

        // Reset transition state after animation completes
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500); // Match this with the CSS transition duration
    }, [images.length, isTransitioning]);

    const goToSlide = (index: number) => {
        if (isTransitioning || index === currentIndex) return;

        setIsTransitioning(true);
        setCurrentIndex(index);

        // Reset transition state after animation completes
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500); // Match this with the CSS transition duration
    };

    // Set up autoplay
    useEffect(() => {
        const interval = setInterval(goToNext, autoplayInterval);
        return () => clearInterval(interval);
    }, [goToNext, autoplayInterval]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                goToPrevious();
            } else if (e.key === 'ArrowRight') {
                goToNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToNext, goToPrevious]);

    if (!images || images.length === 0) {
        return <div className="h-64 bg-gray-200 flex items-center justify-center">No images to display</div>;
    }

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div
                className="flex h-full will-change-transform transition-transform duration-500 ease-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    WebkitTransform: `translateX(-${currentIndex * 100}%)`
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 relative"
                        style={{ willChange: 'transform' }}
                    >
                        <div className='w-full h-full absolute bg-black/40'></div>
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation arrows */}
            {showControls && (
                <>
                    <button
                        onClick={goToPrevious}
                        disabled={isTransitioning}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm transition-colors duration-300 z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-white drop-shadow-md" />
                    </button>
                    <button
                        onClick={goToNext}
                        disabled={isTransitioning}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm transition-colors duration-300 z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-white drop-shadow-md" />
                    </button>
                </>
            )}

            {/* Slide indicators */}
            {showIndicators && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isTransitioning}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-white w-6'
                                : 'bg-white/50 hover:bg-white/70'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageSlider;