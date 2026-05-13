function Projects() {

    const projectData = [
        {
            title: "AI Attendance Management System",
            tech: "Python, OpenCV, Face Recognition",
            description:
                "Built a real-time face recognition based attendance system with automated logging and duplicate prevention."
        },

        {
            title: "Personal Portfolio Website",
            tech: "React, CSS, JavaScript",
            description:
                "Designed and developed a responsive personal portfolio website using React and modern UI design principles."
        },

        {
            title: "Snake Game",
            tech: "Kotlin, Android Studio",
            description:
                "Developed a classic Snake Game using Kotlin with score tracking and real-time movement logic."
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
                        <div className="project-card" key={index}>

                            <h2>{project.title}</h2>

                            <h4>{project.tech}</h4>

                            <p>{project.description}</p>

                        </div>
                    ))
                }

            </div>

        </section>
    )
}

export default Projects