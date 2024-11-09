import { BookText, CodeSquare, HomeIcon, UserRound , Linkedin , Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { PiTelegramLogoThin, PiGithubLogoLight } from "react-icons/pi";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/alejandrodmt",
    },
    {
        id: 2,
        logo: <PiTelegramLogoThin size={30} strokeWidth={1} />,
        src: "https://t.me/AlejandroDMT98",
    },
    {
        id: 3,
        logo: <PiGithubLogoLight size={30} strokeWidth={1} />,
        src: "https://github.com/AlejandroD01",
    },
 
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Especialista en Desarrollo Backend",
        subtitle: "Java, Spring Boot",
        description: "+6 años de experiencia programando para La Universidad de las Ciencias Informáticas",
    },
    {
        id: 2,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "React, Next js",
        description: "+3 años de experiencia trabajando freelancer",
    },
    {
        id: 3,
        title: "Especialistas en WordPress",
        subtitle: "",
        description: "+3 años de experiencia trabajando freelancer",

    }
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 5,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 8,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 10,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "E-commerce web",
        image: "/image-9.jpeg",
        urlGithub: "",
        urlDemo: "https://mifortunasr.com/",
    },
    {
        id: 2,
        title: "GESPRE",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/AlejandroD01/GESPRE",
        urlDemo: "",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Laura Sánchez",
        description:
            "Mis más grandes recomendaciones ",
        imageUrl: "/profile5.png",
    },
    {
        id: 2,
        name: "Jorge Martínez",
        description:
            "Muy Profesional y capaz ",
        imageUrl: "/profile6.png",
    },
];