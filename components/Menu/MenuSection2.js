import React from "react";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import { motion } from "framer-motion";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

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
      "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 100%)",
    // "&:hover": {
    //   border: "1px solid",
    //   color: "white",
    // },
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

const MenuSection2 = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.mn}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Added to cart
        </Alert>
      </Snackbar>
      <div className={classes.juice}>
        <motion.div
          animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <h1>Juice & Milkshakes</h1>
        </motion.div>
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
          <div className={classes.rate}>rate: 109$</div>
          <button className={classes.bt} onClick={handleClick}>
            Order Now
          </button>
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
          <div className={classes.rate}>rate: 116$</div>
          <button className={classes.bt} onClick={handleClick}>
            Order Now
          </button>
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
          <div className={classes.rate}>rate: 101$</div>
          <button className={classes.bt} onClick={handleClick}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default MenuSection2;
