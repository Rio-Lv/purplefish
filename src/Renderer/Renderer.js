import React, { useEffect } from "react";
import styled from "styled-components";
import {
  get_dependents,
  get_endpoints,
  get_specific_dependents,
  split_entities,
} from "./render_functions";

function Renderer({ list }) {
  useEffect(() => {
    // const endpoints = get_endpoints(list);
    // console.log("endpoints", endpoints);
    // const dependents = get_dependents(list);
    // console.log("dependents", dependents);
    // const specific_dependent = get_specific_dependents(list, list[0].id);
    // console.log(`${list[0].name} dependents`, specific_dependent);
    // const specific_dependent_2 = get_specific_dependents(list, list[1].id);
    // console.log(`${list[1].name} dependents`, specific_dependent_2);
    const split = split_entities(list);
    console.log(split);
  }, [list]);

  const splitToColumns = (array) => {
    // this array of lists keeps format but in boxes and columns
    var cols = [];
    for (let i = 0; i < array.length; i++) {
      var col = [];
      for (let j = 0; j < array[i].length; j++) {
        col.push(<Box key={`${i}_${j}`}>{array[i][j].name}</Box>);
      }
      cols.push(<Col key={i}>{col}</Col>);
    }
    return cols;
  };

  return (
    <div>
      <Row>{splitToColumns(split_entities(list))}</Row>
    </div>
  );
}

export default Renderer;

const Box = styled.div`
  position: relative;

  height: 40px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
