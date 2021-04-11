import React, {useState} from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "../containers/MapChart";
import PlanListPage from "../containers/PlanListPage";

const MainPage = () => {
  const [content, setContent] = useState("");
  const [planListPage, setplanListPage] = useState({
      state: false, 
      locationCode:'',
      locationName:''
    });

  return (
    <>
      <ReactTooltip>{content}</ReactTooltip>
      <MapChart setTooltipContent={setContent} setplanListPage={setplanListPage}/>
      {planListPage.state && 
      <PlanListPage 
        locationCode={planListPage.locationCode} 
        locationName={planListPage.locationName} 
        setplanListPage={setplanListPage}
      />}
    </>
  );
}

export default MainPage;
