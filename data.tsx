import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { PiTelegramLogoThin, PiGithubLogoLight, PiWhatsappLogoLight, PiPaperPlane } from "react-icons/pi";

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
    {
        id: 5,
        logo: <PiPaperPlane size={30} strokeWidth={1} />,
        src: "mailto:alejandrodavidmonagas@gmail.com",
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
        pdf: "cv-backend-alejandro-d.pdf",
    },
    {
        id: 2,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "React, Next js",
        description: "+5 años de experiencia programando para La UCI y trabajando freelancer",
        pdf: "cv-frontend-alejandrod.pdf",

    },
    {
        id: 3,
        title: "Especialistas en WordPress",
        subtitle: "",
        description: "+4 años de experiencia trabajando freelancer",
        pdf: "cv-wordpress-alejandrod.pdf",

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
        description: "LANDING PAGE sobre fertilizantes nanoquelatados avanzados para mejorar el crecimiento y rentabilidad de los cultivos.",
        herramientas: (
            <>
                <span>
                    <strong>Tema:</strong> Astra
                </span>
                <br />
                <span> <strong>Plugins:</strong> Elementor, WPForms, Yoast SEO, Formidable, Tutor Pro, Tutor, Betterdocs</span>
            </>
        ),
    },
    {
        id: 2,
        title: "GESPRE",
        technology: "Spring Boot",
        image: "/java-code.jpg",
        urlGithub: "https://github.com/AlejandroD01/GESPRE",
        urlDemo: "",
        description: "Sistema para la gestión de la prenómina del Departamento de Tecnología",
        herramientas: (
            <>
                <br />
                <span>
                    <strong>Spring Boot 2.6.4, java 8</strong>
                </span>
                <br />
                <span> <strong>Dependencias:</strong> JPA, Postgresql, Spring Security, Formidable, Jjwt, Modelmapper, Spring Validation</span>
            </>
        ),
    },
    {
        id: 3,
        title: "Microservicios",
        technology: "Spring Boot",
        image: "/java-code.jpg",
        urlGithub: "https://github.com/AlejandroD01/microservicios-tutorial.git",
        urlDemo: "",
        description: "Tutorial de microservicios con Spring Boot y Netflix Eureka",
        herramientas: (
            <>
                <br />
                <span>
                    <strong>Spring Boot 2.5.4, java 17</strong>
                </span>
                <br />
                <span> <strong>Dependencias:</strong>Spring Data JPA, h2database, spring-cloud:2020.0.3, sleuth-zipkin, Starter-netflix-eureka-client, Modelmapper, starter-bootstrap, starter-config</span>
            </>
        ),
    },
    {
        id: 4,
        title: "Udemy Spring Security",
        technology: "Spring Boot",
        image: "/java-code.jpg",
        urlGithub: "https://github.com/AlejandroD01/Nin2ja.git",
        urlDemo: "",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
        herramientas: (
            <>
                <br />
                <span>
                    <strong>Spring Boot  2.7.9, java 8</strong>
                </span>
                <br />
                <span> <strong>Dependencias:</strong> JPA, Postgresql, Spring Security, thymeleaf, Hibernate , Modelmapper, css, html</span>
            </>
        ),
    },
    {
        id: 5,
        title: "Spring Cloud",
        technology: "Spring Boot",
        image: "/java-code.jpg",
        urlGithub: "https://github.com/AlejandroD01/service-configuration.git",
        urlDemo: "",
        description: "Configuración del Microservico en Spring Cloud",
        herramientas: (
            <>
                <br />
                <span>
                    <strong>Spring Boot, java 8</strong>
                </span>
            </>
        ),
    },
    {
        id: 6,
        title: "XpresSolutions",
        technology: "WordPress",
        image: "/xpressolution.webp",
        urlGithub: "",
        urlDemo: "https://expresssolutionscuba.com/",
        description: " TIENDA ONLINE de Cuba que ofrece una amplia variedad de productos de tecnología y moda. cuenta con diversas categorías de productos. ofrece servicios premium, como la compra en Amazon y Shein.",
        herramientas: (
            <>
                <br />
                <span>
                    <strong>Tema:</strong> Woodmart
                </span>
                <br />
                <br />
                <span> <strong>Plugins:</strong>Elementor Website Builder, Elementor pro, Essential addons for elementor lite, Affiliate WP, Woocommerce, WooCommerce Square, Fluentform, Estimate delivery date for woocommerce pro, Yoast SEO, Wc Frontend Manager, Woo Wallet, Elementor</span>
            </>
        ),
    },
    {
        id: 7,
        title: "Studio Tattoo",
        technology: "WordPress",
        image: "/tatto.webp",
        urlGithub: "",
        urlDemo: "https://thelcmtattoos.com/",
        description: "PORFOLIO que se esplecializa en la creación de tatuajes personalizados y piercings, ofreciendo un enfoque creativo y personalizado.",
        herramientas: (
            <>
                <br />
                <span>
                    <strong>Tema:</strong> Astra
                </span>
                <br />
                <br />
                <span> <strong>Plugins:</strong>Button Generation, Translatepress Multilingual, Bookly Responsive Appointment Booking Tool, Bookly Addon Pro, Omnisend, Ultimate Addons For Gutenberg, Google Analytics For Wordpress </span>
            </>
        ),
    },
    {
        id: 8,
        title: "MiFortunaSRL",
        technology: "WordPress",
        image: "/image-9.webp",
        urlGithub: "",
        urlDemo: "https://mifortunasr.com/",
        description: "LANDING PAGE dedicada a la distribución y comercialización de productos para la nutrición y protección vegetal, así como a servicios de apoyo a la agricultura en Cuba.",
        herramientas: (
            <>
                <br />
                <span>
                    <strong>Tema:</strong> Astra
                </span>
                <br />
                <br />
                <span> <strong>Plugins:</strong> Litespeed Cache, Contact Form 7, Ultimate Addons For Gutenberg, Woocommerce, Essential Blocks, FiboSearch – Ajax Search for WooCommerce</span>
            </>
        ),
    },
    {
        id: 9,
        title: "Ecotec",
        technology: "WordPress",
        image: "/ecotec.webp",
        urlGithub: "",
        urlDemo: "https://ecotec-cuba.com/",
        description: "LANDING PAGE que se dedica a la optimización de la presencia en línea mediante estrategias avanzadas de SEO. Ofrecen servicios de desarrollo web, marketing digital y soluciones tecnológicas.",
        herramientas: (
            <>
                <br />
                <span>
                    <strong>Tema:</strong> RT-Theme 19
                </span>
                <br />
                <br />
                <span> <strong>Plugins:</strong> Essential Grid, Contact Form 7, Js_composer, Woocommerce, Revslider, Slider Revolution Responsive WordPress Plugin</span>
            </>
        ),
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