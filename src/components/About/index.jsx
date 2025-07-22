import React, { useEffect } from "react";
import TimeQuotes from "./TimeQuotes";
import NGA from "../../assets/icons/nigeria-flag-waving-xs.png";
import GER from "../../assets/icons/germany-xs.png";
import UK from "../../assets/icons/uk-xs.png";
import ESP from "../../assets/icons/spain-xs.png";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about-section">
      <div className="about--top">
        <TimeQuotes />
      </div>
      <div className="about-description">
        <p
          className="heading-about"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          {/* Hello World 🌎, I'm Feyijimi, a front-end developer from{" "}
          <span className="inner-span__descrption">
            Lagos, Nigeria <img src={NGA} alt="Flag of Nigeria" />
          </span>{" "} */}
          Hello World 🌍, I’m Feyijimi — I’m self-taught and passionate about
          turning ideas into real, working software. I love building things that
          people can use, and that’s what keeps me excited about writing code
          every day.
        </p>

        <p
          className="heading-about"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          I mostly work with JavaScript, especially React, Next.js, and Node.js,
          but I also enjoy working with Python. My go-to code editor is VS Code
          (I live in that thing 💜).
        </p>

        <p
          className="heading-about"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Over time, I’ve built and shipped more than six AI-powered GPT
          solutions, and I’m always exploring new ways to create with tech. I’m
          also a technical writer, which helps me explain complex things in a
          clear, simple way, whether it’s through docs, blog posts, or
          tutorials. When it comes to cloud skills, I’ve earned three AWS
          certifications — Solutions Architect, Developer, and AI Practitioner.
          These help me understand how to build secure, scalable software from
          end to end.
        </p>

        <p
          className="heading-about"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Fun Facts😎: <br />
          <span>
            💡 I Speak 4 different Languages,{" "}
            <span className="inner-span__descrption">
              English <img src={UK} alt="Flag of the UK" />
            </span>
            ,{" "}
            <span className="inner-span__descrption">
              German <img src={GER} alt="Flag of Germany" />
            </span>
            ,{" "}
            <span className="inner-span__descrption">
              Spanish <img src={ESP} alt="Flag of Spain" />
            </span>
            and Yoruba (mother tongue)
            <br />
            <br />
            💡 Outside of work, I relax by reading books, trying out new foods,
            exploring new places, attending tech conferences, and mentoring
            young children who are interested in technology. I love impactful
            work, especially when it involves software development.
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
