import { useContext } from "react";
import TemperatureContext from "../contexts/TemperatureContext";
import { Snowflake } from "lucide-react";
import { Parasol } from "lucide-react";
import { Rose } from "lucide-react";

export default function ThermostatSection() {
  const {
    degrees,
    handleIncreaseTemperature,
    handleDecreaseTemperature,
    handleResetTemperature,
  } = useContext(TemperatureContext);
  return (
    <section className="my-4">
      <div className="d-flex gap-3 justify-content-center align-items-center">
        {degrees <= 20 && <Snowflake />}
        {degrees > 20 && degrees < 25 && <Rose />}
        {degrees >= 25 && <Parasol />}
        <p className="display-1">{degrees}°</p>
      </div>
      <div className="btn-group" role="group">
        <button
          onClick={handleIncreaseTemperature}
          className={`${degrees === 28 ? "disabled" : ""} btn btn-danger`}
        >
          Increase
        </button>
        <button onClick={handleResetTemperature} className="btn btn-warning">
          Reset
        </button>
        <button
          onClick={handleDecreaseTemperature}
          className={`${degrees === 16 ? "disabled" : ""} btn btn-primary`}
        >
          Decrease
        </button>
      </div>
    </section>
  );
}
