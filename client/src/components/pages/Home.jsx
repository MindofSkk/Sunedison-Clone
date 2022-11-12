import React from "react";
import { Box, Button, Heading, Image } from "@chakra-ui/react";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.firstdiv}>
      <div className={styles.content}>
      
        <Heading size='lg' fontSize='80px'>Savings <br />
         for a lifetime</Heading>
        <Heading mb={4} fontWeight='100' fontSize='45px'>Get the SunEdison advantage</Heading>

      
        <button className={styles.bluebtn}>Compute your solar savings</button>
        <button  className={styles.orgbtn}>Explore solar solutions</button>
      </div>
    </div>
  );
};
