import React from "react";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  SectionTwo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem ",
  },
  h: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem ",
    color: "white",
  },
}));

const SectionTwo = () => {
  const classes = useStyles();
  return (
    <div className={classes.h} id="about">
      <h1>About Us</h1>
      <div className={classes.SectionTwo}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div>
        <Image src={"/bb.png"} alt={"images"} width={800} height={400} />
      </div>
    </div>
  );
};
export default SectionTwo;
