import { RevealOnScroll } from "./Components/RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "React Native", "JavaScript", "TailwindCss", "HTML", "CSS"];
    const BackendSkills = ["Java", "PostGresSQL", "AWS"];
    return (
        <section
            id="about"
            className=" flex items-center justify-center py-5 "
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="glass rounded-xl p-10 border-white/10 border hover:translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I'm a curious and driven professional transitioning from Hospitality and PR into tech. At Code for All, I gained hands-on experience in Java, web development, and databases. My background in customer service and digital marketing sharpened my communication, adaptability, and problem-solving skills. I'm especially drawn to frontend and full-stack roles where I can combine technical know-how with a user focused approach. Always learning, always building and ready to grow with a collaborative, innovative team.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-cyan-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {BackendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-cyan-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 ">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏫 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-5">
                            <li>
                                <strong> Code For All </strong> 🔴  Jan 2025 -  May 2025
                                <p className="italic">14-Week Intensive && Immersive Full-Stack Programming Bootcamp</p>
                            </li>
                            <li>
                                <strong> Universidade da MAIA </strong>🔵 Sep 2015 - Jan 2019
                                <p className="italic">Bachelor in Public Relations, Publicity and Applied Communications</p>
                            </li>
                            <li>
                                <strong>Esc. de Hotelaria e Turismo do Porto</strong> 🟢 Sep 2014 - Jan 2016
                                <p className="italic">Hotel Management Level 4</p>
                            </li>
                           
                        </ul>
                    </div>


 <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🧑🏼‍💻 Work </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-5">
                            <li>
                                <strong> Quality Inspector @ Amspec </strong>  
                                <p>Feb 2024 -  Sep 2024</p>
                               <p className="italic">Inspected and assessed over 250 cargo shipments (oil, jet fuel, chemicals) for quality and compliance with Antwerp Port and EU regulations.</p>
                            </li>
                            <li>
                                <strong className="italic">Operations Manager @ Roji Antwerpen </strong>
                                <p>Jan 2023 - Feb 2024</p>
                               <p>Led daily operations and managed a 4-person team, optimizing workflows and implementing structured planning tools.</p>
                            </li>
                            <li>
                                <strong> Public Relations Department @ Matosinhos City Hall</strong>
                                <p>Feb 2020 - Feb 2021</p>
                                <p className="italic">Developed and implemented political protocol for City Hall and official events. Coordinated visits of high-profile figures (Presidents, Ministers, International Organizations). Managed communications and reporting on international city twinning agreements.</p>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};