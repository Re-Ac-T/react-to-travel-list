import React from "react";
import MainPage from "./pages/MainPage";
import {PlanProvider} from './DataContext';

const App = () => {
  return (
    <PlanProvider>
      <MainPage />
    </PlanProvider>
  );
}

export default App;
