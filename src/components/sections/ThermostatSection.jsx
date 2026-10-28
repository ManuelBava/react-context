import { useContext } from "react";
import TemperatureContext from "../contexts/TemperatureContext";

export default function ThermostatSection() {
  const {
    degrees,
    handleIncreaseTemperature,
    handleDecreaseTemperature,
    handleResetTemperature,
  } = useContext(TemperatureContext);
  return (
    <section>
      <p className="display-1">{degrees}°</p>
      <div className="btn-group" role="group">
        <button onClick={handleIncreaseTemperature} className="btn btn-danger">
          Increase
        </button>
        <button onClick={handleResetTemperature} className="btn btn-warning">
          Reset
        </button>
        <button onClick={handleDecreaseTemperature} className="btn btn-primary">
          Decrease
        </button>
      </div>
    </section>
  );
}
