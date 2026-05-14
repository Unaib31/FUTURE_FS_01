import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa"

function Contact() {
    return (
        <section id="contact" className="contact">

            <h1 className="section-title">
                Contact Me
            </h1>

            <div className="contact-container">

                <p>
                    <FaEnvelope className="contact-icon" />

                    <a href="mailto:unaib3127@gmail.com">
                        Email
                    </a>
                </p>

                <p>
                    <FaGithub className="contact-icon" />

                    <a
                        href="https://github.com/Unaib31"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </p>

                <p>
                    <FaLinkedin className="contact-icon" />

                    <a
                        href="https://www.linkedin.com/in/Unaib3127"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </p>

            </div>

        </section>
    )
}

export default Contact