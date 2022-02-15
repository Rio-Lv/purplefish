import React, { useEffect } from "react";
import styled from "styled-components";
import {
  get_dependents,
  get_dependent_names,
  get_endpoints,
  get_endpoint_names,
  get_specific_dependents,
  get_specific_dependent_names,
} from "./render_functions";

function Renderer({ list }) {
  useEffect(() => {
    const endpoints = get_endpoints(list);
    console.log("endpoints", endpoints);
    const dependents = get_dependents(list);
    console.log("dependents", dependents);
    const specific_dependent = get_specific_dependents(list, list[0].id);
    console.log(`${list[0].name} dependents`, specific_dependent);
  }, [list]);
  return <div>Renderer</div>;
}

export default Renderer;

const Box = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
