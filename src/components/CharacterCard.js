import React from "react";
import styled from 'styled-components'

export default function CharacterCard(props) {

  const Card = styled.div`
    color:pink;
  `;

  return (
    <Card>
    <h1>{props.results}</h1>
    </Card>
    );
}
