import React from "react";
import { createRoot } from "react-dom/client";
import { HeroSlice } from "../src";

const App = () => {
  return (
    <div>
      <HeroSlice />
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
