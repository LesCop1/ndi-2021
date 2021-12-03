import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import LoremIpsum from "pages/LoremIpsum";
import AboutUs from "pages/About-Us";

const App = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/missions" element={<LoremIpsum title="missions" />} />
    <Route path="/harbor-services" element={<LoremIpsum title="harbor-services" />} />
    <Route path="/maritime-savings" element={<LoremIpsum title="maritime-savings" />} />
    <Route path="/technics" element={<LoremIpsum title="technics" />} />
    <Route path="/history" element={<LoremIpsum title="history" />} />
    <Route path="/additional" element={<LoremIpsum title="additional" />} />
    <Route path="/estaminet" element={<LoremIpsum title="estaminet" />} />
    <Route path="/about-us" element={<AboutUs />} />
  </Routes>
);

export default App;
