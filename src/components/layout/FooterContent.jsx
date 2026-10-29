import { useTemperatureContext } from "../contexts/TemperatureContext";

export default function FooterContent() {
  const { degrees } = useTemperatureContext();
  return (
    <footer className="text-center mt-auto py-3 border-top bg-success">
      <span className="badge bg-primary fs-6">Termostato: {degrees}°C</span>
    </footer>
  );
}
