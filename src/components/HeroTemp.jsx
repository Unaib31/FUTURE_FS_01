import resume from '../assets/resume.pdf'
function HeroTemp() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

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


      </div>

    </section>
  )
}

export default HeroTemp