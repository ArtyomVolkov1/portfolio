import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './index.css';
import htmlIcon from '../../img/skills-icon/HTML5.svg';
import CSS3Icon from '../../img/skills-icon/CSS3.svg';
import SassIcon from '../../img/skills-icon/Sass.svg';
import FigmaIcon from '../../img/skills-icon/Figma.svg';
import JavascriptIcon from '../../img/skills-icon/Javascript.svg';
import TypeScriptIcon from '../../img/skills-icon/TypeScript.svg';
import NodejsIcon from '../../img/skills-icon/Nodejs.svg';
import reactIcon from '../../img/skills-icon/React.svg';
import ReduxIcon from '../../img/skills-icon/Redux.svg';
import BootstrapIcon from '../../img/skills-icon/Bootstrap.svg';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="container">
    <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} autoPlaySpeed={1350}  autoPlay={true} responsive={responsive} infinite={true} className="content-list">
        <div className="content-list__item"><img src={htmlIcon} alt="html-icon" /></div>
        <div className="content-list__item"><img src={CSS3Icon} alt="css3-icon" /></div>
        <div className="content-list__item"><img src={SassIcon} alt="Sass-icon" /></div>
        <div className="content-list__item"><img src={FigmaIcon} alt="Figma-icon" /></div>
        <div className="content-list__item"><img src={JavascriptIcon} alt="JS-icon" /></div>
        <div className="content-list__item"><img src={TypeScriptIcon} alt="TS-icon" /></div>
        <div className="content-list__item"><img src={NodejsIcon} alt="Node-icon" /></div>
        <div className="content-list__item"><img src={reactIcon} alt="react-icon" /></div>
        <div className="content-list__item"><img src={ReduxIcon} alt="Redux-icon" /></div>
        <div className="content-list__item"><img src={BootstrapIcon} alt="Bootstrap-icon" /></div>
    </Carousel>
    </div>
  )
}

export default Skills;