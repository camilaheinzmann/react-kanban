import React, { useState } from "react";

import Home from "./pages/Home";
import Navigation from "./components/Navigation";

import "./styles/global.scss";

export default function App() {
  const [background, setBackground] = useState({
    color: "pink",
    image: "none",
  });

  return (
    <div
      style={{
        backgroundColor: background.color,
        backgroundImage: background.image,
        backgroundSize: "cover",
      }}
    >
      <Navigation setBackground={setBackground} background={background} />
      <Home />
    </div>
  );
}
