import React from "react";

import { ListGroup } from "react-bootstrap";

import * as Icon from 'react-feather';


import styled from "styled-components";

const Title = styled.h1`
    font-size: 40px;
`;

const Interests = () => {
  return <section id="interests">
    <div className="container">
    <Title>Interests</Title>
    <ListGroup variant="flush">
    <ListGroup.Item><Icon.Play size={16} /> Bermain Game PC : Black Desert Online, Black Squad dll</ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Interests;