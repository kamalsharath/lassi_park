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
  img: {
    width: "200",
    height: "400",
    margin: "2rem",
  },
  text: {
    display: "flex",
    flexDirection: "column",
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
  juice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    fontSize: "30px",
    margin: "2rem",
    width: "100%",
    color: "white",
  },
}));

const MenuSection2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.mn}>
      <div className={classes.juice}>
        <h1>Juice & Milkshakes</h1>
      </div>
      <div className={classes.root}>
        <div className={classes.img}>
          <Image src={"/orange.png"} alt={"images"} width={800} height={1000} />
        </div>
        <div className={classes.text}>
          <h3>Apple juice</h3>
          This that then twat. This that then twat. This that then twat. This
          that then twat. This that then twat. This that then twat. This that
          then twat. This that then twat. This that then twat. This that then
          twat.This that then twat. This that then twat.
          <button className={classes.bt}>Order Now</button>
        </div>
      </div>
      <div className={classes.root}>
        <div className={classes.img}>
          <Image
            src={"/pngwing.com.png"}
            alt={"images"}
            width={800}
            height={1000}
          />
        </div>
        <div className={classes.text}>
          <h3>papaya juice</h3>
          This that then twat. This that then twat. This that then twat. This
          that then twat. This that then twat. This that then twat. This that
          then twat. This that then twat. This that then twat. This that then
          twat.This that then twat. This that then twat.
          <button className={classes.bt}>Order Now</button>
        </div>
      </div>
      <div className={classes.root}>
        <div className={classes.img}>
          <Image src={"/pngegg.png"} alt={"images"} width={800} height={1000} />
        </div>
        <div className={classes.text}>
          <h3>orange juice</h3>
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
export default MenuSection2;
