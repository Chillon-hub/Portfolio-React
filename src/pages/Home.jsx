import { useEffect, useState } from "react";
import SocialLinks from "../components/SocialLinks";

const titles = [
    "Full Stack Developer",
    "Junior Design Engineer",
    "Electronics Engineer",
];

const Home = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center w-full min-h-[calc(100vh-64px)] px-4">
            <div className="space-y-4">
                <div className="text-3xl">Hello there! I am</div>
                <div className="text-5xl sm:text-6xl md:text-8xl font-bold">Chillon Rigonan</div>
                <div className="text-4xl text-gray-600 dark:text-gray-300 h-8 transition-all duration-500 ease-in-out">
                    <span className="inline-block animate-fade-in-up">
                        {titles[index]}
                    </span>
                </div>
            </div>

            <div className="mt-6">
                <SocialLinks />
            </div>

            <div className="my-4">
                <a
                    href="https://drive.google.com/file/d/1Bht2-FXJ_nCNW0_rtZXlmbvMg8zzsJR7/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Resume Link"
                    className="text-2xl inline-block px-6 py-3 mt-1.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
                >
                    Resume
                </a>
            </div>
        </div>
    );
};

export default Home;