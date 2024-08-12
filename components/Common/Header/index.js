import React, { useEffect, useState } from "react";
import Button from "../Button";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (darkMode) {
      setLight();
    } else {
      setDark();
    }
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="header">
      <h1>
        CryptoXTrade<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Switch checked={darkMode} onClick={changeMode} />
        <a href="/">
          <p className="link">Inicio</p>
        </a>
        <a href="/compare">
          <p className="link">Comparar</p>
        </a>
        <a href="/watchlist">
          <p className="link">Lista de precios</p>
        </a>
        <a href="/sold">
          <p className="link">Compra y venta</p>
        </a>
        <a href="/convert">
          <p className="link">Conversion</p>
        </a>
        <a href="/walldig">
          <p className="link">Billetera</p>
        </a>
        <a href="/dashboard">
          <Button text={"Panel"} />
        </a>
      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
