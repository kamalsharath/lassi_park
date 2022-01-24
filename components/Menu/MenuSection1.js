import React from "react";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import { motion } from "framer-motion";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

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
    margin: "2rem 0rem 0rem 0rem",

    boxShadow:
      "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
    // "&:hover": {
    //   border: "1px solid",
    //   // color: "white",
    // },
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
  rate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    fontSize: "20px",
    width: "100%",
    color: "red",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MenuSection1 = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [order, setOrder] = React.useState();
  const handleClick = (event) => {
    setOrder(event.currentTarget.id);
    setOpen(true);
    fetch("/api/store-order?").then((res) => {
      res
        .json()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
    });
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Added to cart
        </Alert>
      </Snackbar>
      <div className={classes.mn}>
        <div className={classes.juice}>
          <motion.div
            animate={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <h1>ICE CREAMS</h1>
          </motion.div>
        </div>
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
            <div className={classes.rate}>rate: 156$</div>
            <button className={classes.bt} onClick={handleClick}>
              Order Now
            </button>
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
            <div className={classes.rate}>rate: 156$</div>
            <button className={classes.bt} onClick={handleClick}>
              Order Now
            </button>
          </div>
        </div>
        <div className={classes.root}>
          <div className={classes.img1}>
            <Image
              src={"/black.webp"}
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
            <div className={classes.rate}>rate: 156$</div>
            <button className={classes.bt} onClick={handleClick}>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuSection1;
