import React from 'react'
import Image from 'next/image'

import { words, images } from './data'

const PhoneGallery = () => {
    return (
        <div className="grid grid-cols-2 gap-0 w-full py-12 md:py-20 text-3xl md:text-5xl font-bacasime text-text">
            {/* Row 1 */}
            <div className="relative aspect-square">
                <Image
                    src={images[1]}
                    alt="Historic wedding style decoration with floral arrangements"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex items-center justify-center aspect-square">
                <h2>{words[1]}</h2>
            </div>

            <div className="flex items-center justify-center aspect-square">
                <h2>{words[2]}</h2>
            </div>
            <div className="relative aspect-square">
                <Image
                    src={images[2]}
                    alt="Modern wedding style with outdoor seating and floral path"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Row 2 */}
            <div className="relative aspect-square">
                <Image
                    src={images[3]}
                    alt="Timeless wedding bouquet with roses"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex items-center justify-center aspect-square">
                <h2>{words[3]}</h2>
            </div>
            <div className="flex items-center justify-center aspect-square">
                <h2>{words[4]}</h2>
            </div>
            <div className="relative aspect-square">
                <Image
                    src={images[4]}
                    alt="Magical wedding style with colorful flower path"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Row 3 */}
            <div className="relative aspect-square">
                <Image
                    src={images[5]}
                    alt="Elegant wedding with bride and groom on stairs"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex items-center justify-center aspect-square">
                <h2>{words[5]}</h2>
            </div>
            <div className="flex items-center justify-center aspect-square">
                <h2>{words[6]}</h2>
            </div>
            <div className="relative aspect-square">
                <Image
                    src={images[6]}
                    alt="Romantic wedding style with floral decorations"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Row 4 */}

            <div className="relative aspect-square">
                <Image
                    src={images[7]}
                    alt="Classic wedding style with golden arch"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex items-center justify-center aspect-square">
                <h2>{words[7]}</h2>
            </div>
            <div className="flex items-center justify-center aspect-square">
                <h2>{words[8]}</h2>
            </div>
            <div className="relative aspect-square">
                <Image
                    src={images[8]}
                    alt="Joyous wedding style with floral decorations"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    )
}

export default PhoneGallery