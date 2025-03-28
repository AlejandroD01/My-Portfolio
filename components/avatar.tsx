
"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className=" bottom-0 right-0 h-auto hidden md:inline-block md:fixed ">
            <Image src="/avatar-1.png" width="350" height="350"  alt="Particles " />
        </MotionTransition>
    )
}
