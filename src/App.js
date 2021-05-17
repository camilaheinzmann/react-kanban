import React, { useState } from "react";

import Home from "./pages/Home";
import Navigation from "./components/Navigation";

import "./styles/global.scss";

export default function App() {
  const [background, setBackground] = useState("pink");

  return (
    <div
      style={{
        backgroundColor: background,
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <Navigation setBackground={setBackground} />
      <Home />
    </div>
  );
}
