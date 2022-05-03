import React from "react";
import styled from "styled-components";
import AddCard from "./Components/AddCard";
import Card from "./Components/Card";
import Search from "./Components/Search";
export default function Draft() {
  return (
    <div>
      <Center>
        <Search />
        <h1 style={{ marginTop: "50px" }}>Welcome To Purple Fish</h1>
        <Row>
          <Card />
          <Card />
          <Card />
        </Row>
        <Row>
          <Card />
          <Card />
          <Card />
        </Row>
        <Row>
          <Card />
          <AddCard />
        </Row>
      </Center>
    </div>
  );
}
const Center = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  left: 50%;
  transform: translate(-50%, 0);
`;
