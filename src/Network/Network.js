import React, { useEffect, useState } from "react";
import {
  connectAll,
  connectList,
  drawPositions,
  generateRandomizedBox,
  getEntity,
  numberOfLines,
} from "./Funcs";
import { list } from "./list";
import styled from "styled-components";

function Network() {
  const [positions, setPositions] = useState(generateRandomizedBox(list));
  useEffect(() => {
    const ent = getEntity(list, 4);
    console.log("ent", ent);
    const numLines = numberOfLines(list);
    console.log("numlines", numLines);
  }, []);
  const update = () => {};

  return (
    <div>
      Network
      <Canvas>
        {drawPositions(positions)}
        {/* {connectAll(positions)} */}
        {connectList(list, positions)}
      </Canvas>
      <UpdateButton onClick={() => update}>Update</UpdateButton>
    </div>
  );
}

export default Network;
const Canvas = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-color: #000000;
  box-sizing: border-box;
  padding: 10px;
  /* border: 3px solid red; */
`;
const UpdateButton = styled.div`
  width: 100px;
  padding: 15px;
  margin: 15px;
  padding: 15px;
  background-color: #00607e;
  color: white;
  border-radius: 15px;
  font-weight: 400;
`;
