import React, {useState} from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./pages/MapChart";

const App = () => {
  const [content, setContent] = useState("");
  return (
    <>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </>
  );
}

export default App;
