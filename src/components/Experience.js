import React from "react";

import { ListGroup } from "react-bootstrap";

import * as Icon from 'react-feather';


import styled from "styled-components";

const Title = styled.h1`
    font-size: 40px;
`;


const Experience = () => {
  return <section id="experience">
    <div className="container">
    <Title>Experience</Title>
    <ListGroup variant="flush">
      <ListGroup.Item><Icon.Edit size={16} /> 2015 : Freelance</ListGroup.Item>
      <ListGroup.Item><Icon.Edit size={16} /> 2016-2018 : ICT di Akfar Dwi Farma Bukittinggi</ListGroup.Item>
      <ListGroup.Item><Icon.Edit size={16} /> 2018-Sekarang : Analis Data dan Informasi - Bidang Tata Kelola Data - Pusdatin BPOM</ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Experience;