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
          Hello World 🌎, I'm Feyijimi, a front-end developer from{" "}
          <span className="inner-span__descrption">
            Lagos, Nigeria <img src={NGA} alt="Flag of Nigeria" />
          </span>{" "}
          who self-taught himself. I translate concepts into tangible products
          using software languages and tools. That's a big part of why I like
          working as a developer.
        </p>

        <p
          className="heading-about"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          I mostly use JavaScript to create scalable, pixel-perfect, and
          simple-to-maintain products, but I'm always ready to get my hands
          dirty with different kinds of software languages. My safe haven is
          Visual Studio Code 💜
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
            <br/>
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
