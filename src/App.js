import React, { useEffect } from "react";
import AOS from "aos";
import $ from "jquery";

import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Awards from "./components/Awards";


import "aos/dist/aos.css";
import "./assets/styles/main.scss";
import { Col, Container, Row } from "react-bootstrap";






const App = () => {
  useEffect(() => {
    AOS.init({ once: true });

    let navElement = $("nav");

    $(function() {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
    $(window).on("scroll", function() {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
  });

  return (
    <Container fluid>
    <Row>
        <Col xs={4} id="sidebar-wrapper">      
          <Sidebar />
        </Col>
        <Col  xs={8} id="page-content-wrapper">
        <main>
              <About />
              <Experience />
              <Education />
              <Skills />
              <Interests />
              <Awards />
        </main>
        </Col> 
    </Row>

</Container>
    
  );
};

export default App;
