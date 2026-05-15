import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="layout">
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
