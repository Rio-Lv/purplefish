import React from "react";
import styled from "styled-components";

function Search() {
  return (
    <div>
      <Bar />
    </div>
  );
}

export default Search;

const Bar = styled.div`
  height: 50px;
  width: 700px;
  border-radius: 25px;
  background-color: "#000000";
`;
