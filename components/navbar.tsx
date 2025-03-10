"use client"

import Link from "next/link";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const router = usePathname();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(false);
    }, [router]);

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-2">
            {/* Barra de carga */}
            {isLoading && (
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    exit={{ width: 0 }}
                    className="absolute top-0 h-1 bg-secondary"
                    transition={{ duration: 5, ease: "circInOut" }}
                />
            )}
            
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/20 background-blur-sm">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                                router === item.link && "bg-secondary"
                            }`}
                        >
                            <Link
                                href={item.link}
                                onClick={() => setIsLoading(true)}
                            >
                                {item.icon}
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar;