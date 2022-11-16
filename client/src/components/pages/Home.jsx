import React from "react";
import { Box, Button, Heading, Image } from "@chakra-ui/react";
import styles from "./css/Home.module.css";

export const Home = () => {
  const imagedata = [
    "https://sunedison.in/wp-content/uploads/2022/01/Vector-1.png",
    "https://sunedison.in/wp-content/uploads/2022/02/noun-solar-panel-4413713-1.png",
    "https://sunedison.in/wp-content/uploads/2022/01/noun-solar-2990902-2.png",
    "https://sunedison.in/wp-content/uploads/2022/01/Trees-saved.png",
  ];
  return (
    <div>
      <div className={styles.firstdiv}>
        <div className={styles.content}>
          <Heading size="lg" fontSize="80px">
            Savings <br />
            for a lifetime
          </Heading>
          <Heading mb={4} fontWeight="100" fontSize="45px">
            Get the SunEdison advantage
          </Heading>

          <button className={styles.bluebtn}>Compute your solar savings</button>
          <button className={styles.orgbtn}>Explore solar solutions</button>
        </div>
      </div>

      <div className={styles.secdiv}>
        <div>
          {" "}
          <img src={imagedata[0]} alt="" /> 200+ <br />
          <h1>Cities in India</h1>
        </div>
        <div>
          {" "}
          <img src={imagedata[1]} alt="" />
          25000+ <br />
          <h1>INSTALLATIONS</h1>
        </div>
        <div>
          <img src={imagedata[2]} alt="" />
          100MWp+ <br />
          <h1>CAPACITY INSTALLED</h1>
        </div>
        <div>
          <img src={imagedata[3]} alt="" />
          10M+ <br />
          <h1>TREES SAVED</h1>
        </div>
      </div>
    </div>
  );
};
