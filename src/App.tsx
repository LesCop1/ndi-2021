import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import LoremIpsum from "pages/LoremIpsum";
import Stories from "pages/Stories";
import Story from "pages/Story";
import AboutUs from "pages/About-Us";
import DevNDI from "pages/Dev-ndi";

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
    <Route path="/stories/" element={<Stories />} />
    <Route path="/stories/:storyid" element={<Story />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/dev-ndi" element={<DevNDI />} />
  </Routes>
);

export default App;
