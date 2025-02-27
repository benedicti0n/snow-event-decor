import React from "react";
import ImageSlider from "../ui/ImageSlider";

const Landingpage = () => {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            alt: "Landscape with mountains and lake"
        },
        {
            url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            alt: "Forest with path"
        },
        {
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            alt: "Mountain range at sunset"
        },
        {
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
            alt: "Sunlight through forest trees"
        },
        {
            url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
            alt: "Foggy mountains landscape"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Full-width slider */}
            <div className="w-full h-screen">
                <ImageSlider
                    images={images}
                    autoplayInterval={5000}
                    showIndicators={true}
                >
                </ImageSlider>
                <h1 className="text-8xl font-bacasime text-background absolute top-0 z-60 h-screen w-full flex justify-center items-center">Snow Event Decor</h1>
            </div>
        </div>
    );
}

export default Landingpage