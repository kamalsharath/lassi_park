import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  megaContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
    color: "white",
    padding: "2rem",
    fontFamily: "Roboto",

    // backgroundImage: "url()",
    // backgroundSize: "cover",
  },
  gg: {
    // backgroundColor: "black",
    height: "15rem",
    width: "80rem",
    color: "white",
    padding: "2rem",
    fontFamily: "Roboto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
  },
  img1: {
    // width: "200",
    // height: "400",
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
    width: "50px",
    height: "40px",
    borderRadius: "10px",
    // margin: "20px 0px 0px 0px",
    fontSize: "30px",
    // gap: "2rem",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  cc: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    margin: "2rem",
    gap: "5rem",
  },
  juice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    fontSize: "30px",
    padding: "0rem 0rem 0rem 0rem",
    width: "100%",
    color: "white",
  },
  cou: {
    // fontSize: "30px",
    padding: "0rem 1rem 0rem 1rem",
  },
  price: {
    margin: "0rem 0rem 0rem 2rem",
  },
  make: {
    backgroundColor: "red",
    color: "white",
    width: "20rem",
    height: "40px",
    borderRadius: "10px",
    margin: "2rem 0rem 0rem 36rem",
    fontSize: "30px",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  mm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    gap: "1rem",
  },
}));

const CartItems = () => {
  const classes = useStyles();
  const [cartItems, setCartItems] = React.useState([]);
  const [counter, setCounter] = React.useState(1);
  const [counter2, setCounter2] = React.useState(1);
  const [total, setTotal] = React.useState(110);

  const add = () => {
    setCounter(counter + 1);
  };
  const minus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const add1 = () => {
    setCounter2(counter2 + 1);
  };
  const minus1 = () => {
    if (counter2 > 0) {
      setCounter2(counter2 - 1);
    }
  };
  React.useEffect(() => {
    fetch("/api/cartItem")
      .then((r) => r.json())
      .then((d) => {
        for (let i = 0; i < d.length; i++) {
          setCartItems(d[i].name);
          console.log(d[i].name);
        }
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className={classes.megaContainer}>
      <div>
        <Typography variant="h6">Hii, {cartItems} </Typography>
        <div className={classes.gg}>
          <Typography variant="h6">Items</Typography>

          <div className={classes.mm}>
            {counter > 0 ? (
              <div className={classes.cc}>
                <div id="blah">CHOCOLATE ICE CREAM</div>
                <div className={classes.juice}>
                  <button className={classes.bt} onClick={minus}>
                    -
                  </button>
                  <Typography variant="h6" className={classes.cou}>
                    {counter}
                  </Typography>
                  <button className={classes.bt} onClick={add}>
                    +
                  </button>
                  <Typography variant="h6" className={classes.price}>
                    Price = {total * counter}
                  </Typography>
                </div>
              </div>
            ) : null}
            {counter2 > 0 ? (
              <div className={classes.cc}>
                <div>CHOCOLATE ICE CREAM</div>
                <div className={classes.juice}>
                  <button className={classes.bt} onClick={minus1}>
                    -
                  </button>
                  <Typography variant="h6" className={classes.cou}>
                    {counter2}
                  </Typography>
                  <button className={classes.bt} onClick={add1}>
                    +
                  </button>
                  <Typography variant="h6" className={classes.price}>
                    Price = {total * counter2}
                  </Typography>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <button className={classes.make}>
          <Typography variant="h6">Make payment</Typography>
        </button>
      </div>
    </div>
  );
};

export default CartItems;
