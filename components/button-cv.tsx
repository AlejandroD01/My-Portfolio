"use client"

interface DescargarPDFProps { pdf: string; }

const ButtonDescargarPDF = (props: DescargarPDFProps) => {
    const { pdf } = props
    return (
        <a href={`/${pdf}`}
            download={pdf}
            className=" px-3 py-2  transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
            Descargar CV
        </a>

    );
}

export default ButtonDescargarPDF;