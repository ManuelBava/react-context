import { Flame } from "lucide-react";
export default function SideBar() {
  return (
    <section className="px-3 border-end">
      <h2>SideBar</h2>
      <a
        href="#"
        className="nav-link text-dark d-flex align-items-center gap-2"
      >
        <Flame size={18} /> Termostato
      </a>
    </section>
  );
}
