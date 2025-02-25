"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { motion } from 'framer-motion';

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
        description: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo, urlGithub, description } = data
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // Evitar propagación del evento
        setIsFlipped((prev) => !prev);
    };

    const variants = {
        front: {
            rotateY: 0,
            transition: { duration: 0.8 },
        },
        back: {
            rotateY: 180,
            transition: { duration: 0.8 },
        },
    };

    return (
        <div
          key={id}
          className="relative w-[200px] h-[300px] cursor-pointer"
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="absolute w-full h-full"
            initial="front"
            animate={isFlipped ? 'back' : 'front'}
            variants={variants}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Frente de la tarjeta */}
            <motion.div
              className="absolute w-full h-full backface-hidden p-4 border border-teal-50 rounded-xl "
              style={{ backgroundColor: 'rgba(31, 25, 52)', backfaceVisibility: 'hidden' }}
            >
              <h3 className="mb-4 text-xl">{title}</h3>
              <Image
                src={image}
                alt="Image"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl"
              />
    
              <div className="flex gap-5 mt-5">
                {urlGithub && (
                  <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                  >
                    Github
                  </Link>
                )}
                {urlDemo && (
                  <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 px-4 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                  >
                    Link
                  </Link>
                )}
                <button className="p-1 transition-all border-2 cursor-pointer rounded-lg border-secondary text-secondary hover:shadow-lg hover:shadow-secondary" onClick={handleFlip}>Descripción</button>
              </div>
            </motion.div>
    
            {/* Reverso de la tarjeta */}
            <motion.div
              className="absolute w-full h-full backface-hidden p-4 border border-teal-50 rounded-xl "
              style={{ backgroundColor: 'rgba(31, 25, 52)', transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
            >
              <h3 className="mb-4 text-xl">{title}</h3>
              <p className="text-gray-300">{description}</p>
              <button onClick={handleFlip} className="mt-5 p-2 transition-all border-2 cursor-pointer rounded-lg border-secondary text-secondary hover:shadow-lg hover:shadow-secondary">
                Volver
              </button>
            </motion.div>
          </motion.div>
        </div>
      );
}

export default PortfolioBox
