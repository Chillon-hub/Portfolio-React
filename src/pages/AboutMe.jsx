const skills = [
  { title: "HTML", image: "" },
  { title: "CSS", image: "" },
  { title: "JavaScript", image: "" },
  { title: "ReactJS", image: "" },
  { title: "TailwindCSS", image: "" },
  { title: "NodeJS", image: "" },
  { title: "ExpressJS", image: "" },
  { title: "MongoDB", image: "" },
  { title: "Postman", image: "" },
  { title: "GitBash", image: "" },
  { title: "RESTful API", image: "" },
];

const AboutMe = () => {
  return (
    <div className="pt-16 sm:pt-28 px-4 sm:px-8 max-w-7xl mx-auto pb-20">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-2 p-2">About Me</h1>
        <div className="w-1/2 h-[2px] bg-blue-500 ml-2" />
      </div>

      <div className="space-y-16">
        {/* Who Am I */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Who Am I</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a highly motivated Full Stack Developer with a background in engineering and a passion for building clean, functional, and user-focused web applications.
            After several years as a Junior Design Engineer, I transitioned into tech through Uplift Code Camp’s immersive Full Stack Web Development program, where I gained hands-on experience with the MERN stack (MongoDB, Express, React, Node.js).
            I love solving problems with code, working on collaborative projects, and continuously learning new technologies. My goal is to create meaningful digital experiences that make a positive impact.
          </p>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              <strong>Junior Design Engineer</strong> <br />
              <span className="text-sm text-gray-500">YAZAKI Philippines EDS Techno-Service, Inc. (Feb 2022 – Present)</span>
            </li>
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              <strong>Full-Stack Web Developer</strong><br />
              <span className="text-sm text-gray-500">Uplift Code Camp (Jan 2025 – Jul 2025)</span>
            </li>
            <li>
              <strong>Bachelor of Science in Electronics and Communication Engineering</strong><br />
              <span className="text-sm text-gray-500">University of Perpetual Help - Molino (2011 – 2017)</span>
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-md transition"
              >
                {skill.image ? (
                  <img src={skill.image} alt={skill.title} className="h-12 w-12 object-contain" />
                ) : (
                  <div
                    aria-label={skill.title}
                    className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-semibold text-gray-600 dark:text-gray-300"
                  >
                    {skill.title.slice(0, 2)}
                  </div>
                )}
                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;