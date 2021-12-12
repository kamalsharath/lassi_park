import React from "react";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  mn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
  },
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    gap: "2rem",
  },
  img1: {
    width: "200",
    height: "400",
    margin: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    margin: "100px 0px 0px 0px",
    width: "200rem",
    fontSize: "20px",
    color: "white",
  },
  bt: {
    backgroundColor: "black",
    color: "white",
    width: "200px",
    height: "50px",
    borderRadius: "10px",
    margin: "20px 0px 0px 0px",

    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
}));

const MenuSection1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.mn}>
      <div className={classes.root}>
        <div className={classes.img1}>
          <Image
            src={"/icefrappuccino.jpg"}
            alt={"images"}
            width={800}
            height={1000}
          />
        </div>
        <div className={classes.text}>
          <h3>DEATH BY CHOCOLATE</h3>
          This that then twat. This that then twat. This that then twat. This
          that then twat. This that then twat. This that then twat. This that
          then twat. This that then twat. This that then twat. This that then
          twat.This that then twat. This that then twat.
          <button className={classes.bt}>Order Now</button>
        </div>
      </div>
      <div className={classes.root}>
        <div className={classes.img1}>
          <Image
            src={"/images (1).jpg"}
            alt={"images"}
            width={800}
            height={1000}
          />
        </div>
        <div className={classes.text}>
          <h3>DEATH BY CHOCOLATE</h3>
          This that then twat. This that then twat. This that then twat. This
          that then twat. This that then twat. This that then twat. This that
          then twat. This that then twat. This that then twat. This that then
          twat.This that then twat. This that then twat.
          <button className={classes.bt}>Order Now</button>
        </div>
      </div>
      <div className={classes.root}>
        <div className={classes.img1}>
          <Image src={"/black.webp"} alt={"images"} width={800} height={1000} />
        </div>
        <div className={classes.text}>
          <h3>DEATH BY CHOCOLATE</h3>
          This that then twat. This that then twat. This that then twat. This
          that then twat. This that then twat. This that then twat. This that
          then twat. This that then twat. This that then twat. This that then
          twat.This that then twat. This that then twat.
          <button className={classes.bt}>Order Now</button>
        </div>
      </div>
    </div>
  );
};
export default MenuSection1;
