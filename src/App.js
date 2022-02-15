import "./App.css";
import { clone } from "./functions";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import ReactJson from "react-json-view";
import { list } from "./data";
import Renderer from "./Renderer/Renderer";
function App() {
  const [doc, setDoc] = useState(list);

  const mergeState = (setState, new_entities) => {
    setState((old_state) => {
      return [...old_state, ...new_entities];
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          const clones = clone(test_tube, 6);
          mergeState(setDoc, clones);
        }}
      >
        add 5 clones
      </button>
      <Renderer list={doc} />
      <ReactJson src={doc} />
    </div>
  );
}

export default App;

const test_tube = {
  id: uuidv4(),
  name: "test_tube",
  description: "test tube that contains purp",
};
