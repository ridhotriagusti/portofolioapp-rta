import React from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Section = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

`;

const BgOverlay = styled.div`
  background: linear-gradient(33deg, #fff, #fff);
  opacity: 0.9;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;

  @media (min-width: 992px) {
    background-image: linear-gradient(62deg, #fff, #fff);
  }
`;

const HomeTitle = styled.h1`
  font-weight: 300;
  text-align: left;
  color: $color-black;
  font-size: 43px;
  line-height: 1.55;
  margin-bottom: 23px;

  @media (min-width: 992px) {
    font-size: 50px;
    line-height: 1.39;
    max-width: 1100px;
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h5`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.83;
  text-align: left;
  color: $color-gray;

  @media (min-width: 992px) {
    max-width: 385px;
    margin-bottom: 10px;
  }
`;


const Icons = styled.h1`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.83;
  text-align: left;
  color: $color-gray;

  @media (min-width: 992px) {
    max-width: 385px;
    margin-bottom: 49px;
  }
`;



const About = () => {
  return (
    <Section id="about">
      <BgOverlay />
      <div className="container">
        <HomeTitle data-aos="zoom-in">
          Portofolio
        </HomeTitle><br></br>
        <SubTitle
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
          Nama : Ridho Tri Agusti
        </SubTitle>
        <SubTitle
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
          Email : ridhotriagusti@gmail.com
        </SubTitle>
        <SubTitle
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
          Kode Peserta Hacktiv8 : RCTN042ONL007
        </SubTitle>
        <SubTitle
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
          No. HP : +62 0823 8820 6720
        </SubTitle><br></br>
        <Icons
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
         <a href="https://www.linkedin.com/in/ridho-tri-agusti-459755130" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size={"2x"} color={"black"}/></a>
         <a style={{paddingLeft:"10px"}} href="https://github.com/ridhotriagusti" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} size={"2x"} color={"black"}/></a>
         <a style={{paddingLeft:"10px"}} href="https://www.instagram.com/ridhotriagusti/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faInstagram} size={"2x"} color={"black"}/></a>
        </Icons>
      </div>
    </Section>
  );
};

export default About;
