import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  megaContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    // backgroundImage: "url()",
    backgroundSize: "cover",
  },
}));

const CartItems = () => {
  const classes = useStyles();
  // const [cartItems, setCartItems] = React.useState("");
  // React.useEffect(() => {
  //   fetch("/api/order")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCartItems(data);
  //     });
  //   console.log(cartItems);
  // }, [cartItems]);

  return (
    <div className={classes.megaContainer}>
      <div>
        <Typography>Cart Items</Typography>
        <Typography></Typography>
      </div>
    </div>
  );
};

export default CartItems;
