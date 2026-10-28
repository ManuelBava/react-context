import HeaderContent from "./components/layout/HeaderContent";
import SideBar from "./components/layout/SideBar";
import MainContent from "./components/layout/MainContent";
import FooterContent from "./components/layout/FooterContent";
import TemperatureContext from "./components/contexts/TemperatureContext";
import { useState } from "react";
function App() {
  const [degrees, setDegrees] = useState(20);
  function handleIncreaseTemperature() {
    setDegrees((degree) => degree + 1);
  }
  function handleDecreaseTemperature() {
    setDegrees((degree) => degree - 1);
  }
  function handleResetTemperature() {
    setDegrees(0);
  }
  return (
    <div className="d-flex min-vh-100">
      <TemperatureContext.Provider
        value={{
          degrees,
          handleIncreaseTemperature,
          handleDecreaseTemperature,
          handleResetTemperature,
        }}
      >
        {/* Sidebar fissa a sinistra a tutta altezza */}
        <SideBar />

        {/* Area destra verticale */}
        <div className="d-flex flex-column flex-grow-1">
          <HeaderContent />
          <MainContent />
          <FooterContent />
        </div>
      </TemperatureContext.Provider>
    </div>
  );
}

export default App;
