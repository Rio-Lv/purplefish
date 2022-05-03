import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Network from "./Network/Network";
import Draft from "./Draft/Draft";

function App() {
  return (
    <div>
      {/* <Network></Network> */}
      <Draft />
    </div>
  );
}

export default App;
