import { Heading } from "@chakra-ui/react";
import React from "react";
import styles from "./css/Solar_Calculator.module.css";

export const Solar_Calculator = () => {
  return (
    <div className={styles.box}>
      Home » Solar Calculator
      <h1></h1>
      <div className={styles.firstBox}>
        {" "}
        <h2 className={styles.s2}>
          | Find the right rooftop solar system and save
        </h2>
        <h1 className={styles.s1}>SunEdison Solar Calculator </h1>
        <p>
          SunEdison’s solar calculator helps you easily understand the benefit
          of using solar products. Use this simple tool to gauge potential
          savings with <br /> our rooftop solar system for your home or
          commercial property. It will also tell you the best rooftop solar
          product for your premises.
        </p>
      </div>
    </div>
  );
};
