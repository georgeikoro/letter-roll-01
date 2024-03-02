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

export const introAnimation = (
  wordGroupsRef,
  wordGroupsRefTwo,
  wordGroupsRefThree
) => {
  const tl = gsap.timeline();

  tl.to(wordGroupsRef.current, {
    yPercent: -80,
    duration: 11,
    ease: "power3.inOut",
  })
    .to(
      wordGroupsRefTwo.current,
      {
        yPercent: -80,
        duration: 12,
        ease: "power3.inOut",
      },
      "="
    )
    .to(
      wordGroupsRefThree.current,
      {
        yPercent: -80,
        duration: 13,
        ease: "power3.inOut",
      },
      "="
    );

  return tl;
};

export const introAnimationTwo = (
  wordGroupsRefFour,
  wordGroupsRefFive,
  wordGroupsRefSix
) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRefFour.current, {
    yPercent: -80,
    duration: 10,
    ease: "power3.inOut",
  })
    .to(
      wordGroupsRefFive.current,
      {
        yPercent: -80,
        duration: 11,
        ease: "power3.inOut",
      },
      "="
    )
    .to(
      wordGroupsRefSix.current,
      {
        yPercent: -80,
        duration: 12,
        ease: "power3.inOut",
      },
      "="
    );

  return tl;
};

export const introAnimationThree = (
  wordGroupsRefSeven,
  wordGroupsRefEight,
  wordGroupsRefNine
) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRefSeven.current, {
    yPercent: -80,
    duration: 9,
    ease: "power3.inOut",
  })
    .to(
      wordGroupsRefEight.current,
      {
        yPercent: -80,
        duration: 9,
        ease: "power3.inOut",
      },
      "="
    )
    .to(
      wordGroupsRefNine.current,
      {
        yPercent: -80,
        duration: 11,
        ease: "power3.inOut",
      },
      "="
    );

  return tl;
};

export const introAnimationFour = (wordGroupsRefTen, wordGroupsRefEleven) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRefTen.current, {
    yPercent: -80,
    duration: 12,
    ease: "power3.inOut",
  }).to(
    wordGroupsRefEleven.current,
    {
      yPercent: -80,
      duration: 14,
      ease: "power3.inOut",
    },
    "="
  );

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

export const progressAnimation = (progressRef, progressNumberRef) => {
  const tl = gsap.timeline();

  tl.to(progressRef.current, {
    scaleX: 1,
    duration: 12,
    ease: "power3.inOut",
  })

    .to(
      progressNumberRef.current,
      {
        x: "100vw",
        duration: 12,
        ease: "power3.inOut",
      },
      "<"
    )
    .to(
      progressNumberRef.current,
      {
        textContent: "100%",
        duration: 12,
        roundProps: "textContent",
      },
      "<"
    )
    .to(progressNumberRef.current, {
      y: 24,
      autoAlpha: 0,
    });

  return tl;
};

export const progressAnimationTwo = (progressRefTwo, progressNumberRefTwo) => {
  const tl = gsap.timeline();

  tl.to(
    progressRefTwo.current,
    {
      scaleX: 1,
      duration: 12,
      ease: "power3.inOut",
    },
    "="
  )
    .to(
      progressNumberRefTwo.current,
      {
        x: "100vw",
        duration: 12,
        ease: "power3.inOut",
      },
      "<"
    )
    .to(
      progressNumberRefTwo.current,
      {
        textContent: "100%",
        duration: 12,
        roundProps: "textContent",
      },
      "<"
    )
    .to(progressNumberRefTwo.current, {
      y: 24,
      autoAlpha: 0,
    });

  return tl;
};
