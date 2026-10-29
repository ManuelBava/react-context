import HeaderContent from "./components/layout/HeaderContent";
import SideBar from "./components/layout/SideBar";
import MainContent from "./components/layout/MainContent";
import FooterContent from "./components/layout/FooterContent";
import TemperatureContextProvider from "./components/contexts/TemperatureContext";
function App() {
  return (
    <div className="d-flex min-vh-100">
      <TemperatureContextProvider>
        {/* Sidebar fissa a sinistra a tutta altezza */}
        <SideBar />

        {/* Area destra verticale */}
        <div className="d-flex flex-column flex-grow-1">
          <HeaderContent />
          <MainContent />
          <FooterContent />
        </div>
      </TemperatureContextProvider>
    </div>
  );
}

export default App;
