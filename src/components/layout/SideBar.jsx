import { useContext } from "react";
import TemperatureContext from "../contexts/TemperatureContext";
import { ThermometerSnowflake } from "lucide-react";
import { ThermometerSun } from "lucide-react";
export default function SideBar() {
  const { degrees } = useContext(TemperatureContext);

  return (
    <section className="px-3 border-end py-4 bg-dark text-light">
      <a href="#" className="nav-link d-flex align-items-center gap-2">
        {degrees > 20 && <ThermometerSun size={18} />}
        {degrees <= 20 && <ThermometerSnowflake size={18} />}
        Thermostat at {degrees} degrees
      </a>
    </section>
  );
}
