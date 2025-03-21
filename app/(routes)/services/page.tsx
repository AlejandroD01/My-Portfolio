import AvatarServices from "@/components/avatar-services";
import ButtonContactaConmigo from "@/components/button-contacta-conmigo";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid mt-10 items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className=" ml-8 mr-8 max-w-[450px] mt-20 md:mt-0" >

                    <h1 className="text-2xl leading-tight text-center md:text-center md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3  text-xl  text-gray-300">Ofrezco servicios especializados en desarrollo web. Empleando tecnologías de vanguardia como React.js, Java y WordPress, me dedico a crear interfaces de usuario altamente intuitivas, responsivas y adaptadas a las necesidades específicas de cada cliente.</p>
                    <ButtonContactaConmigo/>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;