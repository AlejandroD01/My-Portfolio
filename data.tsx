import { BookText, CodeSquare, HomeIcon, UserRound , Linkedin , Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { PiTelegramLogoThin, PiGithubLogoLight, PiWhatsappLogoLight } from "react-icons/pi";

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
    {
        id: 4,
        logo: <PiWhatsappLogoLight size={30} strokeWidth={1} />,
        src: "https://wa.me/5358679212",
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
        description: "+7 años de experiencia programando para La Universidad de las Ciencias Informáticas",
        pdf:"cv-backend-alejandro-d.pdf",
    },
    {
        id: 2,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "React, Next js",
        description: "+5 años de experiencia programando para La UCI y trabajando freelancer",
        pdf:"cv-frontend-alejandrod.pdf",

    },
    {
        id: 3,
        title: "Especialistas en WordPress",
        subtitle: "",
        description: "+4 años de experiencia trabajando freelancer",
        pdf:"cv-wordpress-alejandrod.pdf",

    }
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 7,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 20,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 35,
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
        title: "GEOTECH",
        technology: "WordPress",
        image: "/geotec.webp",
        urlGithub: "",
        urlDemo: "https://geotechve.com/",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        id: 2,
        title: "GESPRE",
        technology: "Spring Boot",
        image: "/java-code.jpg",
        urlGithub: "https://github.com/AlejandroD01/GESPRE",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
        urlDemo: "",
    },  
    {
        id: 3,
        title: "Microservicios",
        technology: "Spring Boot",
        image: "/java-code.jpg",
        urlGithub: "https://github.com/AlejandroD01/microservicios-tutorial.git",
        urlDemo: "",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },  
    {
        id: 4,
        title: "Udemy Spring Security",
        technology: "Spring Boot",
        image: "/java-code.jpg",
        urlGithub: "https://github.com/AlejandroD01/Nin2ja.git",
        urlDemo: "",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },  
    {
        id: 5,
        title: "Spring Cloud",
        technology: "Spring Boot",
        image: "/java-code.jpg",
        urlGithub: "https://github.com/AlejandroD01/service-configuration.git",
        urlDemo: "",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },  
    {
        id: 6,
        title: "Tienda Online XpresSolutions",
        technology: "WordPress",
        image: "/xpressolution.webp",
        urlGithub: "",
        urlDemo: "https://expresssolutionscuba.com/",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        id: 7,
        title: "Landing Page Studio Tattoo",
        technology: "WordPress",
        image: "/tatto.webp",
        urlGithub: "",
        urlDemo: "https://thelcmtattoos.com/",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        id: 8,
        title: "MiFortunaSRL",
        technology: "WordPress",
        image: "/image-9.webp",
        urlGithub: "",
        urlDemo: "https://mifortunasr.com/",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        id: 9,
        title: "ACuba",
        technology: "WordPress",
        image: "/Acuba.webp",
        urlGithub: "",
        urlDemo: "https://acuba.com/",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        id: 10,
        title: "Ecotec",
        technology: "WordPress",
        image: "/ecotec.webp",
        urlGithub: "",
        urlDemo: "https://ecotec-cuba.com/",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },

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