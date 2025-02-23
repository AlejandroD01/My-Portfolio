"use client"

import { dataPortfolio } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import CircleImage from "@/components/circle-image";

import { useState } from "react"



const PortfolioPage = () => {

    const [selectedTechnology, setSelectedTechnology] = useState("ReactJS")
    const technologies = ["ReactJS", "Spring Boot", "WordPress"]


    return (
        <ContainerPage>
            <TransitionPage />

            <CircleImage />

            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>

                <div className="w-full max-w-md mx-auto rounded-xl shadow">
                    <fieldset className="flex justify-center space-x-4">
                        <legend className="sr-only">Select a technology</legend>
                        {technologies.map((tech) => (
                            <label key={tech} className="rounded-lg p-0 ">
                                <button
                                    name="technology"
                                    value={tech}
                                    onClick={(e) => setSelectedTechnology(e.currentTarget.value)} // Usa onClick en lugar de onChange
                                    className={`px-3 py-2  transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary ${selectedTechnology === tech
                                            ? 'bg-secondary text-white shadow-lg transform scale-105'
                                            : ' hover:bg-blue-400 hover:text-gray-800'
                                        }`}
                                >
                                    {tech}
                                </button>
                            </label>
                        ))}
                    </fieldset>
                </div>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolio
                        .filter((data) => data.technology === selectedTechnology)
                        .map((data) => (
                            <PortfolioBox key={data.id} data={data} />
                        ))}
                </div>
            </div>

        </ContainerPage >
    );
}

export default PortfolioPage;