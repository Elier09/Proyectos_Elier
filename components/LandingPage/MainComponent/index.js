import React from "react";
import Button from "../../Common/Button";
import "./styles.css";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";

function MainComponent() {
  return (
    <div className="main-flex">
      <div className="info-landing">
        <motion.h1
          className="heading1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          CriptoXTrade
        </motion.h1>
        <motion.h1
          className="heading2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          Tiempo real.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Realice un seguimiento de las criptomonedas en tiempo real. Visite el panel para hacerlo!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <a href="/dashboard">
            <Button text={"Panel"} />
          </a>
          <RWebShare
            data={{
              text: "CryptoDashboard made by Avi Vashishta using React JS.",
              url: "https://crypto-dashboard-jan.netlify.app",
              title: "CryptoTracker.",
            }}
            onClick={() => toast.info("App compartida!")}
          >
            <Button text={"Compartir app"} outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <div className="gradient-div">
        <motion.img
          src={"logo.png"}
          className="gradient"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
      </div>
    </div>
  );
}

export default MainComponent;
