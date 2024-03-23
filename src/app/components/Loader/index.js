// index.js //

import React, { useEffect, useRef } from "react";
import styles from "./Loader.module.scss";

import {
  collapseWords,
  introAnimation,
  progressAnimationTop,
  progressAnimationBottom,
  collapse,
} from "./animations";

import { firstWord, secondWord, thirdWord } from "./data";

const Loader = ({ timeline }) => {
  const loaderRef = useRef(null);
  const progressRefTop = useRef(null);
  const progressRefBottom = useRef(null);
  const progressNumberRefTop = useRef(null);
  const progressNumberRefBottom = useRef(null);
  const wordGroupsRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    timeline &&
      timeline
        .add(collapse(loaderRef))
        .add(progressAnimationTop(progressRefTop, progressNumberRefTop), ">")
        .add(
          progressAnimationBottom(progressRefBottom, progressNumberRefBottom),
          "<"
        )
        .add(introAnimation(wordGroupsRefs), "=")
        .add(collapseWords(loaderRef), "-=1");
  }, [timeline]);

  const renderWordGroup = (words, index) => (
    <div className={styles.loader__words} key={index}>
      <div className={styles.loader__overlay}></div>
      <div className={styles.loader__wordsGroup} ref={wordGroupsRefs[index]}>
        {words.map((word, idx) => (
          <span key={idx} className={styles.loader__word}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader__progressWrapperTop}>
        <div className={styles.loader__progressTop} ref={progressRefTop}></div>
        <span
          className={styles.loader__progressNumberTop}
          ref={progressNumberRefTop}
        >
          0%
        </span>
      </div>
      <div className={styles.loader__progressWrapperBottom}>
        <div
          className={styles.loader__progressBottom}
          ref={progressRefBottom}
        ></div>
        <span
          className={styles.loader__progressNumberBottom}
          ref={progressNumberRefBottom}
        >
          0%
        </span>
      </div>
      <div className={styles.loader} ref={loaderRef}>
        {[firstWord, secondWord, thirdWord].map(renderWordGroup)}
      </div>
    </div>
  );
};

export default Loader;
