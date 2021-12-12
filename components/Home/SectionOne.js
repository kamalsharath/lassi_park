import React from "react";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  setcion: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    backgroundImage: "url(2kTg.gif)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    // color: "white",
    width: "100%",
    height: "100vh",
  },
  anim: {
    fontSize: "50px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    position: "relative",
    top: "35%",
  },
}));
const SectionOne = () => {
  const classes = useStyles();
  return (
    <div className={classes.setcion}>
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <div className={classes.anim}>THE LASSI AND JUICE PARK</div>
      </motion.div>
    </div>
  );
};

export default SectionOne;
