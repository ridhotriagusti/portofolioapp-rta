import React from "react";

import { ListGroup } from "react-bootstrap";

import * as Icon from 'react-feather';

import styled from "styled-components";

const Title = styled.h1`
    font-size: 40px;
`;

const Skills = () => {
  return <section id="skills">
    <div className="container">
    <Title>Skills dan Tools</Title>
    <ListGroup variant="flush">
      <ListGroup.Item><Icon.CheckCircle size={16}/> HTML</ListGroup.Item>
      <ListGroup.Item><Icon.CheckCircle size={16}/> Javascript</ListGroup.Item>
      <ListGroup.Item><Icon.CheckCircle size={16}/> PHP</ListGroup.Item>
      <ListGroup.Item><Icon.CheckCircle size={16}/> Microsoft Visual Studio Code</ListGroup.Item>
      <ListGroup.Item><Icon.CheckCircle size={16}/> SQL Server</ListGroup.Item>
      <ListGroup.Item><Icon.CheckCircle size={16}/> MySQL</ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Skills;