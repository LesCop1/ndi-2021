import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import LoremIpsum from "pages/LoremIpsum";
import Stories from "pages/Stories";
import Story from "pages/Story";
import AboutUs from "pages/About-Us";
import DevNDI from "pages/Dev-ndi";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import Pitch from "pages/Pitch";
import translationFr from "./translations/fr.json";
import translationEn from "./translations/en.json";
import translationAr from "./translations/ar.json";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    fr: { translation: translationFr },
    ar: { translation: translationAr },
  },
  lng: "fr",
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

const App = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missions" element={<LoremIpsum title={t("missions")} />} />
        <Route path="/harbor-services" element={<LoremIpsum title={t("harbor-services")} />} />
        <Route path="/maritime-savings" element={<LoremIpsum title={t("maritime-savings")} />} />
        <Route path="/technics" element={<LoremIpsum title={t("technics")} />} />
        <Route path="/history" element={<LoremIpsum title={t("history")} />} />
        <Route path="/additional" element={<LoremIpsum title={t("additional")} />} />
        <Route path="/estaminet" element={<LoremIpsum title="Estaminet" />} />
        <Route path="/stories/" element={<Stories />} />
        <Route path="/stories/:storyid" element={<Story />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dev-ndi" element={<DevNDI />} />
        <Route path="/pitch" element={<Pitch />} />
      </Routes>
    </Suspense>
  );
};

export default App;
