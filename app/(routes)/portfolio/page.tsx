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
                            <label key={tech} className="rounded-lg p-0 transition-all hover:bg-blue-500 focus:bg-slate-100 active:bg-blue-500">
                                <button
                                    name="technology"
                                    value={tech}
                                    onClick={(e) => setSelectedTechnology(e.currentTarget.value)} // Usa onClick en lugar de onChange
                                    className={`px-6 py-2 rounded-lg transition-all duration-300 ${selectedTechnology === tech
                                            ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800'
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