import { RevealOnScroll } from './Components/RevealOnScroll';
import profileImg from './Resources/IMG_7295.jpeg';
import linkedin from './Resources/linkedin.png';
import github from './Resources/github.png';

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <img
                        className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-10 hover:translate-y-1 transition"
                        src={profileImg}
                        alt="Profile"
                    />
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 bg-gradient-to-r from-green-500 to-cyan-600 bg-clip-text text-transparent leading-tight">
                        Hi, I'm João!
                    </h1>
                    <p className="text-gray-300 text-lg mb-12 max-w-xl mx-auto">
                        I'm a creative software developer with strong communication and social skills, driven by a passion for tech and teamwork. My love for sports fuels my discipline and energy, and I bring that same spirit into problem-solving and collaborative projects.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-cyan-500/50 text-cyan-500 py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:bg-red-500/10">
                            Contact Me
                        </a>
                    </div>
                    <div className="flex justify-center space-x-4 mt-10">
                        <a href="https://www.linkedin.com/in/joao-parada/" target="_blank" rel="noopener noreferrer">
                            <img className="w-10 h-10 rounded-full object-cover hover:translate-y-1 transition" src={linkedin} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/Joao-Parada" target="_blank" rel="noopener noreferrer">
                            <img className="w-10 h-10 rounded-full object-cover hover:translate-y-1 transition" src={github} alt="GitHub" />
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};