import React, {useState} from "react";
import ReactTooltip from "react-tooltip";
import TotravelTemplate from "../components/TotravelTemplate";
import WorldMap from "../containers/WorldMap";
import PlanListPage from "../containers/PlanListPage";
import { TotravelProvider } from '../TotravelContext';
import TotravelHead from '../components/TotravelHead';
import TotravelList from '../components/TotravelList';

const MainPage = () => {
  const [content, setContent] = useState("");
  const [planListPage, setplanListPage] = useState({
      state: false, 
      locationCode:'',
      locationName:''
    });

  return (
    <TotravelProvider>
      <h1 style={{textAlign: "center", color: 'white'}}>World Map</h1>
      <ReactTooltip>{content}</ReactTooltip>
      <WorldMap setTooltipContent={setContent} setplanListPage={setplanListPage} />
      <h1 style={{textAlign: "center", color: 'white'}}>Totravel-list</h1>
      <TotravelTemplate>
        <TotravelHead />
        <TotravelList />
      </TotravelTemplate>
      {planListPage.state && 
      <PlanListPage 
        locationCode={planListPage.locationCode} 
        locationName={planListPage.locationName} 
        setplanListPage={setplanListPage}
      />}
    </TotravelProvider>
  );
}

export default MainPage;
