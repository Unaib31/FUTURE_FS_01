function Skills() {

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Java",
        "Python",
        "Git",
        "GitHub",
        "SQL"
    ]

    return (
        <section id="skills" className="skills">

            <h1 className="section-title">
                Skills
            </h1>

            <div className="skills-container">

                {
                    skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            {skill}
                        </div>
                    ))
                }

            </div>

        </section>
    )
}

export default Skills