import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

import "./Waves.scss";

const Waves = (): JSX.Element => {
  const waves = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    gsap.to("#wave1", {
      backgroundPositionX: "+=1280px",
      ease: "linear",
      repeat: -1,
      duration: 30,
    });

    gsap.to("#wave2", {
      backgroundPositionX: "+=1380px",
      ease: "linear",
      repeat: -1,
      duration: 30,
    });

    gsap.to("#wave3", {
      backgroundPositionX: "+=1480px",
      ease: "linear",
      repeat: -1,
      duration: 30,
    });

    gsap.to("#wave4", {
      backgroundPositionX: "+=1480px",
      ease: "linear",
      repeat: -1,
      duration: 30,
    });
  });

  return (
    <div ref={waves}>
      <div className="wave" id="wave1" />
      <div className="wave" id="wave2" />
      <div className="wave" id="wave3" />
      <div className="wave" id="wave4" />
    </div>
  );
};

export default Waves;
