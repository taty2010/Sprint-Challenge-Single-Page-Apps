import React from "react";
import styled from "styled-components";

const CharacterCard = ({
  results,
  name,
  search,
  gender,
  image,
  species,
  status
}) => {
  const Card = styled.div`
    color: green;
    margin: 2% auto;
    width: 95%;
    height: 150px
    display: flex;
    flex-flow: row;
  `;

  const Img = styled.img`
    width: 30%;
    margin-right: 5%;
  `;

  return (
    <Card>
      <Img src={image} alt="image" />
      <h3>
        {name === results ? results : search === "" ? name : results}
        <p>{gender}</p>
        <p>{species}</p>
        <p>{status}</p>
      </h3>
    </Card>
  );
};
export default CharacterCard;
