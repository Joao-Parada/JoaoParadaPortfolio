import rfp1 from './Resources/MainPage.png';
import rfp2 from './Resources/Authentication.png';
import rfp3 from './Resources/ProposalParamters.png';
import fox1 from './Resources/1741800915393.jpg'
import fox2 from './Resources/1741800931089.jpg'
import fox3 from './Resources/1741800899760.jpg'
import multi1 from './Resources/MultiUserChatServer.png'
import paint1 from './Resources/SquarePaint.png'

import { RevealOnScroll } from './Components/RevealOnScroll';

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-80">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 w-full">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="rounded-xl p-6 bg-white/5 border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-2">RFP AI POWERED</h3>
                            <p className="text-gray-400 mb-4">
                                Apollo Proposals is a full-stack web application developed in just 3 DAYS that generates smart, customized RFP (Request for Proposal) responses using contextual AI. The system goes beyond static prompts it uses client-uploaded documents, previous requests, and feedback ratings to craft more accurate and personalized proposals.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "JavaScript", "AWS", "Spring AI", "Spring MVC", "Spring Boot"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-4 mb-6 overflow-hidden">
                                <img
                                    className="w-40 h-28 sm:w-60 sm:h-40 max-w-full max-h-full object-cover rounded-lg border-2 border-gray-400 relative z-10 transition-transform duration-300 hover:scale-150 hover:z-20"
                                    src={rfp1}
                                    alt="default"
                                />
                                <img
                                    className="w-40 h-28 sm:w-60 sm:h-40 max-w-full max-h-full object-cover rounded-lg border-2 border-gray-400 relative z-10 transition-transform duration-300 hover:scale-150 hover:z-20"
                                    src={rfp2}
                                    alt="default"
                                />
                                <img
                                    className="w-40 h-28 sm:w-60 sm:h-40 max-w-full max-h-full object-cover rounded-lg border-2 border-gray-400 relative z-10 transition-transform duration-300 hover:scale-150 hover:z-20"
                                    src={rfp3}
                                    alt="default"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Joao-Parada/JoaoParada---Projects" className="text-cyan-400 hover:text-green-300 transition-colors my-4">View Project → </a>
                            </div>
                        </div>

                        <div className="rounded-xl p-6 bg-white/5 border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-2">FOXALYPSE</h3>
                            <p className="text-gray-400 mb-4">
                                Foxalypse is a tower defense-style game inspired by Plants vs. Zombies, developed entirely in Java with the SimpleGraphics library. Players defend a chicken coop from waves of foxes using strategic placement and timing. The project was built from scratch, highlighting skills in object-oriented programming, custom 2D animation, and game logic. It was also packaged as a JAR file to ensure portability and ease of execution across systems.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "SimpleGraphics", "2D Animation"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-4 mb-6 overflow-hidden">
                                <img
                                    className="w-40 h-28 sm:w-60 sm:h-40 max-w-full max-h-full object-cover rounded-lg border-2 border-gray-400 relative z-10 transition-transform duration-300 hover:scale-150 hover:z-20"
                                    src={fox1}
                                    alt="default"
                                />
                                <img
                                    className="w-40 h-28 sm:w-60 sm:h-40 max-w-full max-h-full object-cover rounded-lg border-2 border-gray-400 relative z-10 transition-transform duration-300 hover:scale-150 hover:z-20"
                                    src={fox2}
                                    alt="default"
                                />
                                <img
                                    className="w-40 h-28 sm:w-60 sm:h-40 max-w-full max-h-full object-cover rounded-lg border-2 border-gray-400 relative z-10 transition-transform duration-300 hover:scale-150 hover:z-20"
                                    src={fox3}
                                    alt="default"
                                />
                            </div>
                            <a href="https://github.com/Joao-Parada/JoaoParada---Projects" className="text-cyan-400 hover:text-green-300 transition-colors my-3">View Project → </a>
                        </div>

                        <div className="rounded-xl p-6 bg-white/5 border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-2">Multi User Chat Server</h3>
                            <p className="text-gray-400 mb-4">
                                Multi User Chat Server is a Java-based TCP socket application that enables real-time communication between multiple clients connected to a central server. Built with core Java technologies, it highlights robust network programming principles, multithreading, and I/O stream management.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "MultiThreading", "Stream I/O", "Exception Handling"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-4 mb-6 overflow-hidden">
                                <img
                                    className="w-60 h-60 sm:w-90 sm:h-45 max-w-full max-h-full object-contain rounded-lg border-2 border-gray-400 relative z-10 transition-transform duration-300 hover:scale-150 hover:z-20"
                                    src={multi1}
                                    alt="default"
                                />
                            </div>
                            <a href="https://github.com/Joao-Parada/JoaoParada---Projects" className="text-cyan-400 hover:text-green-300 transition-colors my-4">View Project → </a>
                        </div>

                        <div className="rounded-xl p-6 bg-white/5 border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-2">Square Paint</h3>
                            <p className="text-gray-400 mb-4">
                                Square Paint is an interactive Java application that transforms a simple 20x20 grid into a responsive digital canvas. Designed with simplicity and function in mind, it empowers users to create pixel-style artwork using keyboard controls no mouse required.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "Grid Logic", "Simple Graphics", "Coordinate Mapping", "File I/O "].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-4 mb-6 overflow-hidden">
                                <img
                                    className="w-60 h-60 sm:w-90 sm:h-45 max-w-full max-h-full object-contain rounded-lg border-2 border-gray-400 relative z-10 transition-transform duration-300 hover:scale-150 hover:z-20"
                                    src={paint1}
                                    alt="default"
                                />
                            </div>
                            <a href="https://github.com/Joao-Parada/JoaoParada---Projects" className="text-cyan-400 hover:text-green-300 transition-colors my-4">View Project → </a>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};