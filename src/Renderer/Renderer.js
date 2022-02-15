import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Renderer({ list }) {
  const [entities, setEntities] = useState(filterEndPoints(list));
  const [endpoints, setEndpoints] = useState(filterEndPoints(list).endpoints);
  const [dependents, setDependents] = useState(
    filterEndPoints(list).dependents
  );

  useEffect(() => {
    setEntities(filterEndPoints(list));
    setEndpoints(entities.endpoints);
    setDependents(entities.dependents);
    console.log("list Change Detected");
  }, [list]);

  return (
    <Row>
      <Col>{stackList(endpoints)}</Col>
      <Col>{stackList(dependents)}</Col>
    </Row>
  );
}

export default Renderer;

const filterEndPoints = (list) => {
  const endpoints = [];
  const dependents = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].ingredients) {
      dependents.push(list[i]);
    } else {
      endpoints.push(list[i]);
    }
  }
  return { endpoints, dependents };
};
const findDependents = (list, id) => {
  const dependents = [];
  for (let i = 0; i < list.length; i++) {
    const ingredients = list[i].ingredients;

    console.log(ingredients);

    // for (let j = 0; i < ingredients.length; i++) {
    //   if (ingredients[j] === id) {
    //     console.log("hello There");
    //   }
    // }
  }
  return dependents;
};

const stackList = (list) => {
  const array = [];
  if (list) {
    for (let i = 0; i < list.length; i++) {
      array.push(<Box key={list[i].id}>{list[i].name}</Box>);
    }
    return array;
  }
};

const stackLists = (lists) => {
  const array = [];
  for (let i = 0; i < lists.length; i++) {
    array.push(stackList(lists[i]));
  }
  return array;
};

const Box = styled.div`
  position: fixed;
  width: 120px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
