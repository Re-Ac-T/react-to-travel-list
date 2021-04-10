import React, {useState} from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "../containers/MapChart";

const MainPage = () => {
  const [content, setContent] = useState("");

  return (
    <>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </>
  );
}

export default MainPage;
