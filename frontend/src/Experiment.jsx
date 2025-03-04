import React, { useRef } from 'react';
import Timer from './Components/Others/Timer';
import Sidebar from './Components/Students/Sidebar'; // Ensure Sidebar is correctly imported
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion"

const Experiment = () => {
    const aimRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const theoryRef = useRef(null);
    const simulationRef = useRef(null);

    const scrollToSection = (section) => {
        const sectionRefs = {
            aim: aimRef,
            title: titleRef,
            description: descriptionRef,
            theory: theoryRef,
            simulation: simulationRef,
        };

        sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    };
    const { scrollYProgress } = useScroll();


    return (
        <>
         <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#1E2939",
                }}
            />
        <div className="flex">
            
            <Sidebar scrollToSection={scrollToSection} />
            <Timer />
            <main className="ml-16 sm:ml-64 flex-1 p-6 space-y-12">
                <section ref={aimRef} id="aim" className="p-6 bg-gray-100 rounded-lg shadow">
                    <h2 className="text-2xl font-bold">Aim</h2>
                    <p>Explain the purpose of this page.</p>
                </section>

                <section ref={titleRef} id="title" className="p-6 bg-gray-100 rounded-lg shadow">
                    <h2 className="text-2xl font-bold">Title</h2>
                    <p>The main title or heading of the project.</p>
                </section>

                <section ref={descriptionRef} id="description" className="p-6 bg-gray-100 rounded-lg shadow">
                    <h2 className="text-2xl font-bold">Description</h2>
                    <p>A detailed explanation of the project.</p>
                </section>

                <section ref={theoryRef} id="theory" className="p-6 bg-gray-100 rounded-lg shadow">
                    <h2 className="text-2xl font-bold">Theory</h2>
                    <p>Background and theoretical aspects.</p>
                </section>

                <section ref={simulationRef} id="simulation" className="p-6 bg-gray-100 rounded-lg shadow">
                    <h2 className="text-2xl font-bold">Simulation</h2>
                    <p>A simulated example or visualization.</p>
                </section>
            </main>
        </div>
        </>
    );
};

export default Experiment;
