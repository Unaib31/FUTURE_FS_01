
import { motion } from "framer-motion"
import resume from '../assets/resume.pdf'
function HeroTemp() {
  return (
    <section id="home" className="hero">

      <motion.div
        className="hero-content"

        initial={{ opacity: 0, y: 50 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}
      >

        <h2>Hello, I'm</h2>

        <h1>Abu Unaib</h1>

        <h3>
          React Developer | Computer Engineering Student
        </h3>

        <p>
          I build responsive web applications and
          develop practical projects using React,
          Java, Python, and modern web technologies.
        </p>


        <div className="hero-buttons">

          <a href="#projects">
            <button>
              View Projects
            </button>
          </a>

          <a
            href={resume}
            download
          >
            <button className="resume-btn">
              Download Resume
            </button>
          </a>

        </div>


      </motion.div>
    </section>
  )
}

export default HeroTemp