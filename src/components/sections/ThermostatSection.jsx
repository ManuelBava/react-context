import { Snowflake } from "lucide-react";
import { Parasol } from "lucide-react";
import { Rose } from "lucide-react";
import { useTemperatureContext } from "../contexts/TemperatureContext";

export default function ThermostatSection() {
  const {
    degrees,
    handleIncreaseTemperature,
    handleDecreaseTemperature,
    handleResetTemperature,
  } = useTemperatureContext();

  // Calcolo derivato sia del testo che del colore
  const getTemperatureBadge = () => {
    if (degrees <= 20) {
      return { label: "Freddo", bg: "bg-primary" };
    }
    if (degrees <= 24) {
      return { label: "Comfort", bg: "bg-secondary" };
    }
    return { label: "Caldo", bg: "bg-danger" };
  };

  // Estraiamo label e bg prima del return
  const { label, bg } = getTemperatureBadge();

  return (
    <section className="my-4">
      <div className="d-flex gap-3 justify-content-center align-items-center">
        {/* Usiamo sia la classe che il testo in modo sicuro e sincronizzato */}
        <span className={`badge ${bg} ms-2`}>{label}</span>

        {degrees <= 20 && <Snowflake />}
        {degrees > 20 && degrees < 25 && <Rose />}
        {degrees >= 25 && <Parasol />}
        <p className="display-1">{degrees}°</p>
      </div>

      <div className="btn-group" role="group">
        <button
          onClick={handleIncreaseTemperature}
          disabled={degrees >= 28}
          className="btn btn-danger"
        >
          Increase
        </button>
        <button onClick={handleResetTemperature} className="btn btn-warning">
          Reset
        </button>
        <button
          onClick={handleDecreaseTemperature}
          disabled={degrees <= 16}
          className="btn btn-primary"
        >
          Decrease
        </button>
      </div>
    </section>
  );
}
