import React from "react";
import ImageSlider from "../ui/ImageSlider";

const Landingpage = () => {
    const images = [
        {
            url: "/assets/homeImage1.png",
            alt: "Landscape with mountains and lake"
        },
        {
            url: "/assets/homeImage2.jpg",
            alt: "Forest with path"
        },
        {
            url: "/assets/homeImage3.jpg",
            alt: "Mountain range at sunset"
        },
        {
            url: "/assets/homeImage4.JPG",
            alt: "Sunlight through forest trees"
        },
    ];

    return (
        <div id="home" className="min-h-screen bg-gray-100">
            {/* Full-width slider */}
            <div className="w-full h-screen">
                <ImageSlider
                    images={images}
                    autoplayInterval={5000}
                    showIndicators={true}
                >
                </ImageSlider>
                <h1 className="text-4xl md:text-8xl font-bacasime text-background absolute top-0 z-60 h-screen w-full flex justify-center items-center">Snow Event Decor</h1>
            </div>
        </div>
    );
}

export default Landingpage