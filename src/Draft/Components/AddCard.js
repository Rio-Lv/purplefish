import React from "react";
import styled from "styled-components";
import { cardWidth, cardHeight, borderRadius, margin } from "./constants";
export default function AddCard() {
  return (
    <div>
      <Card />
    </div>
  );
}

const Card = styled.div`
  width: ${cardWidth}px;
  height: ${cardHeight}px;
  margin: ${margin}px;
  background-color: #f2f2f2;
  border-radius: ${borderRadius}px;
`;
