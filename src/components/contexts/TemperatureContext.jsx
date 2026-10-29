import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// creazione context
const TemperatureContext = createContext();

// creazione provider
export default function TemperatureContextProvider({ children }) {
  const [degrees, setDegrees] = useState(20);
  function handleIncreaseTemperature() {
    setDegrees((degree) => (degree < 28 ? degree + 1 : 28));
  }
  function handleDecreaseTemperature() {
    setDegrees((degree) => (degree > 16 ? degree - 1 : 16));
  }
  function handleResetTemperature() {
    setDegrees(20);
  }
  return (
    <TemperatureContext
      value={{
        degrees,
        handleIncreaseTemperature,
        handleDecreaseTemperature,
        handleResetTemperature,
      }}
    >
      {children}
    </TemperatureContext>
  );
}

// custom hook per consumare il context
// eslint-disable-next-line
export function useTemperatureContext() {
  const context = useContext(TemperatureContext);
  if (!context) {
    throw new Error("This component must be inside the wrapper context");
  }
  return context;
}
