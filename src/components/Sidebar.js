import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import userImg from "../assets/img/rta.png";



const Sidebar = () => {
 
  const scrollTo = id => e => {
    e.preventDefault();
    scroll.scrollTo({
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
      containerId: id
    });
  };

  return (    
    <div className="container">
            <Nav className="col-md-4 sidebar">
            
              <Image src={userImg} 
              href="/About"
              onClick={scrollTo("about")}
              className="imageRound"
              />
             <br></br>
             <br></br>
             <Nav.Item>
                    <Link
                        href="/About"
                        className="sidebar-link"
                        activeClass="active"
                        onClick={scrollTo("about")}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                    >
                        ABOUT
                        
                    </Link>
             </Nav.Item>
             <br></br>
             <Nav.Item>
                 <Link
                        href="/experience"
                        className="sidebar-link"
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                    >
                         EXPERIENCE
                    </Link>
             </Nav.Item>
             <br></br>
             <Nav.Item>
                 <Link
                        href="/education"
                        className="sidebar-link"
                        activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                    >
                         EDUCATION
                    </Link>
             </Nav.Item>
             <br></br>
             <Nav.Item>
                 <Link
                        href="/skills"
                        className="sidebar-link"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                    >
                         SKILLS
                    </Link>
             </Nav.Item>
             <br></br>
             <Nav.Item>
                 <Link
                        href="/interests"
                        className="sidebar-link"
                        activeClass="active"
                        to="interests"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                    >
                       INTERESTS
                    </Link>
             </Nav.Item>
             <br></br>
             <Nav.Item>
                 <Link
                        href="/awards"
                        className="sidebar-link"
                        activeClass="active"
                        to="awards"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                    >
                        AWARDS
                    </Link>
             </Nav.Item>
            </Nav>
            </div>
  );
};

export default Sidebar;
