import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="bottom-0 right-0 hidden md:inline-block  md:absolute">
            <Image src="/services.png" width="300" height="300" className="w-[300px] h-full " alt="Particles " />
        </MotionTransition>
    );
}

export default AvatarServices;