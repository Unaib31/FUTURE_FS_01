
import { motion } from "framer-motion"
function Projects() {

    const projectData = [
        {
            title: "AI Attendance Management System",
            tech: "Python, OpenCV, Face Recognition",
            description:
                "Built a real-time face recognition based attendance system with automated logging and duplicate prevention.",
            github: "https://github.com/Unaib31/Face"
        },

        {
            title: "Personal Portfolio Website",
            tech: "React, CSS, JavaScript",
            description:
                "Designed and developed a responsive personal portfolio website using React and modern UI design principles.",
            github: "https://github.com/Unaib31/FUTURE_FS_01"
        },

        {
            title: "Snake Game",
            tech: "Kotlin, Android Studio",
            description:
                "Developed a classic Snake Game using Kotlin with score tracking and real-time movement logic.",
            github: "https://github.com/Unaib31/SnakeGame"
        }
    ]

    return (
        <section id="projects" className="projects">

            <h1 className="section-title">
                Projects
            </h1>

            <div className="projects-container">

                {
                    projectData.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}

                            initial={{ opacity: 0, y: 40 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            transition={{ duration: 0.6 }}

                            viewport={{ once: true }}
                        >

                            <h2>{project.title}</h2>

                            <h4>{project.tech}</h4>

                            <p>{project.description}</p>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="project-btn">
                                    View Project
                                </button>
                            </a>

                        </motion.div>
                    ))
                }

            </div>

        </section>
    )
}

export default Projects