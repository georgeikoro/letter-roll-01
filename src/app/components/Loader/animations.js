// animations.js //

import { gsap } from "gsap";

export const collapse = (loaderRef) => {
  const tl = gsap.timeline();
  tl.fromTo(
    loaderRef.current,
    {
      "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      duration: 3,
      delay: 2,
      ease: "expo.inOut",
    },
    {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 3,
      delay: 2,
      ease: "expo.inOut",
    }
  );

  return tl;
};

export const introAnimation = (wordGroupsRefs) => {
  const tl = gsap.timeline();
  const durations = [11, 12, 13];
  wordGroupsRefs.forEach((wordGroupRef, index) => {
    tl.to(
      wordGroupRef.current,
      {
        yPercent: -80,
        duration: durations[index],
        ease: "power3.inOut",
      },
      index === 0 ? "" : "="
    );
  });
  return tl;
};

export const collapseWords = (loaderRef) => {
  const tl = gsap.timeline();
  tl.to(loaderRef.current, {
    "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
    duration: 3,
    ease: "expo.inOut",
  });
  return tl;
};

export const progressAnimationTop = (progressRefTop, progressNumberRefTop) => {
  const tl = gsap.timeline();
  tl.to(progressRefTop.current, {
    scaleX: 1,
    duration: 12,
    ease: "power3.inOut",
  })
    .to(
      progressNumberRefTop.current,
      {
        x: "100vw",
        duration: 12,
        ease: "power3.inOut",
      },
      "<"
    )
    .to(
      progressNumberRefTop.current,
      {
        textContent: "100%",
        duration: 12,
        roundProps: "textContent",
      },
      "<"
    )
    .to(progressNumberRefTop.current, {
      y: 24,
      autoAlpha: 0,
    });
  return tl;
};

export const progressAnimationBottom = (
  progressRefBottom,
  progressNumberRefBottom
) => {
  const tl = gsap.timeline();
  tl.to(progressRefBottom.current, {
    scaleX: 1,
    duration: 12,
    ease: "power3.inOut",
  })
    .to(
      progressNumberRefBottom.current,
      {
        x: "100vw",
        duration: 12,
        ease: "power3.inOut",
      },
      "<"
    )
    .to(
      progressNumberRefBottom.current,
      {
        textContent: "100%",
        duration: 12,
        roundProps: "textContent",
      },
      "<"
    )
    .to(progressNumberRefBottom.current, {
      y: 24,
      autoAlpha: 0,
    });
  return tl;
};
