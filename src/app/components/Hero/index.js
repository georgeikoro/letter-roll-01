import { gsap } from "gsap";

import styles from "./Hero.module.scss";

import { animateHero, animateTitle, animateTitleTwo } from "./animations";
import { useRef, useEffect } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const timeline = useRef(gsap.timeline());
  const itemRef = useRef(null);
  const itemRefTwo = useRef(null);
  const itemRefThree = useRef(null);
  const titleRef = useRef(null);
  const titleRefTwo = useRef(null);
  const titleRefThree = useRef(null);
  const titleRefFour = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateHero(itemRef, itemRefTwo, itemRefThree))
        .add(animateTitle(titleRef, titleRefTwo, titleRefThree), ">")
        .add(animateTitleTwo(titleRefFour), "<");
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <div className={styles.container} ref={heroRef}>
      <div className={styles.item} ref={itemRef}>
        <div ref={titleRef}>Projects</div>
      </div>
      <div className={styles.itemTransform} ref={itemRefTwo}>
        <div ref={titleRefTwo}>Services</div>
      </div>
      <div className={styles.item} ref={itemRefThree}>
        <div ref={titleRefThree}>About</div>
      </div>
      <div className={styles.itemTwo}>
        <div ref={titleRefFour}>Contact</div>
      </div>
    </div>
  );
};

export default Hero;
