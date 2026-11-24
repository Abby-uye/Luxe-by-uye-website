import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Topmost from "../pages/Topmost.tsx";
import "./styles/layout.scss";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="layout_general_wrap">
      <div className="safe_area_bar" />
      {isHome && <Topmost />}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
