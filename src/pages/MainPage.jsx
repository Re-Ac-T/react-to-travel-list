import React, {useState} from "react";
import ReactTooltip from "react-tooltip";
import TotravelTemplate from "../components/TotravelTemplate";
import MapChart from "../containers/MapChart";
import PlanListPage from "../containers/PlanListPage";
import { TotravelProvider } from '../TotravelContext';
import TotravelHead from '../components/TotravelHead';
import TotravelList from '../components/TotravelList';
import TotravelCreate from '../components/TotravelCreate';

const MainPage = () => {
  const [content, setContent] = useState("");
  const [planListPage, setplanListPage] = useState({
      state: false, 
      locationCode:'',
      locationName:''
    });

  return (
    <TotravelProvider>
      <ReactTooltip>{content}</ReactTooltip>
      <MapChart setTooltipContent={setContent} setplanListPage={setplanListPage} />
      <TotravelTemplate>
        <TotravelHead></TotravelHead>
        <TotravelList></TotravelList>
        <TotravelCreate></TotravelCreate>
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
