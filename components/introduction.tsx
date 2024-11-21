import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import ButtonContactaConmigo from "./button-contacta-conmigo";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-2.png" priority width="400" height="400" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Soy Ingeniero Informático Full Stack, experto en integrar diseño y funcionalidad para desarrollar aplicaciones que ofrecen experiencias digitales sofisticadas, intuitivas y accesibles.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                       
                    <ButtonContactaConmigo/>
                    </div>
                    <div className="mt-20"></div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;