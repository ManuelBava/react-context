import { useContext } from "react";
import TemperatureContext from "../contexts/TemperatureContext";

export default function FooterContent() {
  const { degrees } = useContext(TemperatureContext);
  return (
    <footer className="text-center mt-auto py-3 border-top bg-success">
      <p className="display-6 badge bg-primary">{degrees}°</p>
    </footer>
  );
}
