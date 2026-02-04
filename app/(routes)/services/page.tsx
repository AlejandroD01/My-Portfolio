import AvatarServices from "@/components/avatar-services";
import ButtonContactaConmigo from "@/components/button-contacta-conmigo";
import Chat from "@/components/Chat";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />

      <div className="flex justify-center w-full ">
        <div className="w-full max-w-2xl px-4">
          <Chat />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
