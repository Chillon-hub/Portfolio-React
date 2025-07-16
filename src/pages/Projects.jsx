const projects = [
    {
        title: "Kanji Flashcards",
        tech: "ReactJS • TailwindCSS",
        image: "",
        live: "https://kanji-flashcards-react-app.onrender.com/",
        repo: "",
        description: "An app that lets you study basic kanji using flashcards.",
    },
    {
        title: "Finlog",
        tech: "MERN • TailwindCSS",
        image: "",
        live: "",
        repo: "",
        description: "This app helps you monitor your financial activity.",

    },
    {
        title: "QueuePro",
        tech: "MERN • TailwindCSS",
        image: "",
        live: "",
        repo: "",
        description: "A group project app that ",
    },
];

const Projects = () => {
    return (
        <div className="pt-16 sm:pt-28 px-4 sm:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-5xl font-bold mb-2 p-2">Projects</h1>
                <div className="w-1/2 h-[2px] bg-blue-500 ml-2" />
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
                    >
                        {project.image && (
                            <img
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4 space-y-2">
                            <h2 className="text-2xl font-semibold">{project.title}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{project.tech}</p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
                            <div className="flex flex-col gap-2 mt-3">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    🔗 Go to Website
                                </a>
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    📂 See Repository
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;