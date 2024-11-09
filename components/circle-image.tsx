"use client"

import Image from 'next/image'

const CircleImage = () => {
    return (
        <div className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/triangle.png" width="200" height="200" className="w-full h-full " alt="Particles " />
        </div>

    );
}

export default CircleImage;