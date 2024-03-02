import React, { useEffect, useRef } from "react";
import {
  firstWord,
  secondWord,
  thirdWord,
  fourthWord,
  fifthWord,
  sixthWord,
  seventhWord,
  eighthWord,
  ninethWord,
  tenthWord,
  eleventhWord,
} from "./data";

import { gsap } from "gsap";
import styles from "./Loader.module.scss";

import {
  collapseWords,
  introAnimation,
  introAnimationTwo,
  introAnimationThree,
  introAnimationFour,
  progressAnimation,
  progressAnimationTwo,
  collapse,
} from "./animations";

const Loader = ({ timeline }) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressRefTwo = useRef(null);
  const progressNumberRef = useRef(null);
  const progressNumberRefTwo = useRef(null);
  const wordGroupsRef = useRef(null);
  const wordGroupsRefTwo = useRef(null);
  const wordGroupsRefThree = useRef(null);
  const wordGroupsRefFour = useRef(null);
  const wordGroupsRefFive = useRef(null);
  const wordGroupsRefSix = useRef(null);
  const wordGroupsRefSeven = useRef(null);
  const wordGroupsRefEight = useRef(null);
  const wordGroupsRefNine = useRef(null);
  const wordGroupsRefTen = useRef(null);
  const wordGroupsRefEleven = useRef(null);

  useEffect(() => {
    timeline &&
      timeline
        .add(collapse(loaderRef))
        .add(progressAnimation(progressRef, progressNumberRef), ">")
        .add(progressAnimationTwo(progressRefTwo, progressNumberRefTwo), "<")
        .add(
          introAnimation(wordGroupsRef, wordGroupsRefTwo, wordGroupsRefThree),
          "="
        )
        .add(
          introAnimationTwo(
            wordGroupsRefFour,
            wordGroupsRefFive,
            wordGroupsRefSix
          ),
          "="
        )
        .add(
          introAnimationThree(
            wordGroupsRefSeven,
            wordGroupsRefEight,
            wordGroupsRefNine
          ),
          "="
        )
        .add(introAnimationFour(wordGroupsRefTen, wordGroupsRefEleven), "=")
        .add(collapseWords(loaderRef), "-=1");
  }, [timeline]);

  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress} ref={progressRef}></div>
        <span className={styles.loader__progressNumber} ref={progressNumberRef}>
          0%
        </span>
      </div>
      {/* loa */}
      <div className={styles.loader__progressWrapperTwo}>
        <div className={styles.loader__progressTwo} ref={progressRefTwo}></div>
        <span
          className={styles.loader__progressNumberTwo}
          ref={progressNumberRefTwo}
        >
          0%
        </span>
      </div>
      <div className={styles.loader} ref={loaderRef}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRef}>
            {firstWord.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
        {/* 1 */}
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRefTwo}>
            {secondWord.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
        {/* 2 */}
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRefThree}>
            {thirdWord.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
        {/* 3 */}
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRefFour}>
            {fourthWord.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
        {/* 4 */}
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRefFive}>
            {fifthWord.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
        {/* 4 */}
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRefSix}>
            {sixthWord.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
        {/* 4 */}
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRefSeven}>
            {seventhWord.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
        {/* 4 */}
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRefEight}>
            {eighthWord.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
        {/* 4 */}
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRefNine}>
            {ninethWord.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
        {/* 4 */}
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRefTen}>
            {tenthWord.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
        {/* 4 */}
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRefEleven}>
            {eleventhWord.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
