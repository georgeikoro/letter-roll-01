import { gsap } from "gsap";

export const animateHero = (itemRef, itemRefTwo, itemRefThree) => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 3,
      delay: 4,
    },
  });

  tl.fromTo(
    itemRefTwo.current,
    {
      delay: 1,
      yPercent: 0,
      opacity: 0,
      autoAlpha: 0,
      duration: 3,
      ease: "power1.inOut",
    },
    {
      scaleX: 1,
      delay: 1,
      yPercent: 0,
      opacity: 1,
      autoAlpha: 1,
      duration: 3,
      ease: "power1.inOut",
    },
    "="
  )
    .fromTo(
      itemRef.current,
      {
        delay: 1,
        yPercent: 100,
        opacity: 0,
        autoAlpha: 0,
        duration: 2,
        ease: "power1.inOut",
      },
      {
        delay: 1,
        yPercent: 0,
        opacity: 1,
        autoAlpha: 1,
        duration: 2,
        ease: "power1.inOut",
      },
      ">"
    )
    .fromTo(
      itemRefThree.current,
      {
        delay: 1,
        yPercent: -100,
        opacity: 0,
        autoAlpha: 0,
        duration: 2,
        ease: "power1.inOut",
      },
      {
        delay: 1,
        yPercent: 0,
        opacity: 1,
        autoAlpha: 1,
        duration: 2,
        ease: "power1.inOut",
      },
      "-=3"
    );

  return tl;
};

export const animateTitle = (titleRef, titleRefTwo, titleRefThree) => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 4,
      delay: 2,
    },
  });

  tl.fromTo(
    titleRefTwo.current,
    {
      delay: 1,
      yPercent: 20,
      opacity: 0,
      autoAlpha: 0,
      duration: 3,
      ease: "power2.inOut",
    },
    {
      delay: 1,
      yPercent: 0,
      opacity: 1,
      autoAlpha: 1,
      duration: 3,
      ease: "power2.inOut",
    },
    "="
  )
    .fromTo(
      titleRef.current,
      {
        delay: 0.5,
        yPercent: 20,
        opacity: 0,
        autoAlpha: 0,
        duration: 2,
        ease: "power2.inOut",
      },
      {
        delay: 0.5,
        yPercent: 0,
        opacity: 1,
        autoAlpha: 1,
        duration: 2,
        ease: "power2.inOut",
      },
      "="
    )
    .fromTo(
      titleRefThree.current,
      {
        delay: 0.5,
        yPercent: 20,
        opacity: 0,
        autoAlpha: 0,
        duration: 2,
        ease: "power2.inOut",
      },
      {
        delay: 0.5,
        yPercent: 0,
        opacity: 1,
        autoAlpha: 1,
        duration: 2,
        ease: "power2.inOut",
      },
      "-=3"
    );

  return tl;
};

export const animateTitleTwo = (titleRefFour) => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 4,
    },
  });

  tl.fromTo(
    titleRefFour.current,
    {
      yPercent: 20,
      opacity: 0,
      autoAlpha: 0,
      duration: 2,
      delay: 0.5,
      ease: "power2.inOut",
    },
    {
      yPercent: 0,
      opacity: 1,
      autoAlpha: 1,
      duration: 2,
      delay: 0.5,
      ease: "power2.inOut",
    }
  );

  return tl;
};
