import { RevealOnScroll } from './Components/RevealOnScroll';
import profileImg from './Resources/IMG_7295.jpeg'


export const Home = () => {
    return <section id="home" className=" min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <img className='w-100 h-70 rounded-full object-cover mx-auto mb-10 hover:translate-y-1' src={profileImg} alt="default" />
            <h1 className="text-[4rem] md:text-[6rem] font-bold mb-15 bg-gradient-to-r from-green-500 to-cyan-600 bg-clip-text text-transparent leading-tight">Hi, I'm João!</h1>
            <p className="text-gray text-lg mb-15 max-w-200 mx-auto ">
                I'm a creative software developer with strong communication and social skills, driven by a passion for tech and teamwork. My love for sports fuels my discipline and energy, and I bring that same spirit into problem-solving and collaborative projects.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden duration-300 hover:-translate-y-0.5 hover:shadow-0_0_15px_green" >View Projects</a>
                <a href="#contact" className="border border-cyan-500/50 text-cyan-500 py-3 px-6 rounded font-medium trasition-all duration-300 hover:-translate-y-0.5 hover:shadow-0_0_15px_red  hover:bg-red-500/10">Contact Me</a>
            </div>
        </div>

 </RevealOnScroll>
    </section>;
   
};