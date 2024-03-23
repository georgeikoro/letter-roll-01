// page.js //

"use client";

import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

import Loader from "./components/Loader";

const Home = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return <main>{loaderFinished && <Loader timeline={timeline} />}</main>;
};

export default Home;
