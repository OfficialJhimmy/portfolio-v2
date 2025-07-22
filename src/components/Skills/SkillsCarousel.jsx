import "./index.css";
import htmlicon from "../../assets/icons/html5.svg";
import css from "../../assets/icons/css3.svg";
import graph from "../../assets/icons/graphql.svg";
import javascript from "../../assets/icons/javascript.svg";
import node from "../../assets/icons/nodedotjs.svg";
import typescript from "../../assets/icons/typescript.svg";
import firebase from "../../assets/icons/firebase.svg";
import redux from "../../assets/icons/redux.svg";
import googledocs from "../../assets/icons/googledocs.svg";
import markdown from "../../assets/icons/markdown.svg";
import react from "../../assets/icons/react.svg";
import sass from "../../assets/icons/sass.png";
import next from "../../assets/icons/nextdotjs.svg";
import tailwind from "../../assets/icons/tailwindcss.svg";
import wordpress from "../../assets/icons/wordpress.svg";
import mongo from "../../assets/icons/mongodb.svg";
import xml from "../../assets/icons/xaml.svg";
import git from "../../assets/icons/git.svg";
import postman from "../../assets/icons/postman.svg";
import gsapicon from "../../assets/icons/greensock.svg";
import figma from "../../assets/icons/figma.svg";
import jekyll from "../../assets/icons/jekyll.svg";



function SkillsCarousel() {
  const row1 = [
    {
      image: htmlicon,
      text: "HTML",
    },
    {
      image: css,
      text: "CSS",
    },
    {
      image: javascript,
      text: "JavaScript",
    },
    {
      image: typescript,
      text: "TypeScript",
    },
    {
      image: node,
      text: "Node.js",
    },

    {
      image: tailwind,
      text: "Tailwind",
    },

    {
      image: markdown,
      text: "Markdown",
    },
    {
      image: wordpress,
      text: "Wordpress",
    },
    {
      image: sass,
      text: "SASS",
    },
    {
      image: react,
      text: "React.js",
    },
    {
      image: next,
      text: "Next.js",
    },
  ];

  const row2 = [
    {
      image: googledocs,
      text: "Google Docs",
    },
    {
      image: redux,
      text: "Redux",
    },
    {
      image: firebase,
      text: "Firebase",
    },
    {
      image: graph,
      text: "GraphQL",
    },
    {
      image: mongo,
      text: "MongoDB",
    },
    {
      image: xml,
      text: "XAML",
    },
    {
      image: git,
      text: "Git",
    },
    {
      image: postman,
      text: "Postman",
    },
    {
      image: jekyll,
      text: "Jekyll",
    },
    {
      image: figma,
      text: "Figma",
    },
    {
      image: gsapicon,
      text: "GSAP",
    },
  ];

  return (
    <div className="app-container">
      <div className="wrapper">
        <div className="text">
          Tools and Technologies.
        </div>
        <div className="marquee">
          <div className="marquee-group">
            {row1.map((el, index) => (
              <div className="image-group" key={index}>
                <img src={el.image} alt="Company logo" className="image" />
                <span>{el.text}</span>
              </div>
            ))}
          </div>
          <div className="marquee-group">
            {row1.map((el, index) => (
              <div className="image-group" key={index}>
                <img src={el.image} alt="Company logo" className="image" />
                <span>{el.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="marquee">
          <div className="marquee-group-reverse">
            {row2.map((el, index) => (
              <div className="image-group" key={index}>
                <img src={el.image} alt="Company logo" className="image" />
                <span>{el.text}</span>
              </div>
            ))}
          </div>
          <div className="marquee-group-reverse">
            {row2.map((el, index) => (
              <div className="image-group" key={index}>
                <img src={el.image} alt="Company logo" className="image" />
                <span>{el.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsCarousel;
