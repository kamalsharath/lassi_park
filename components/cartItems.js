import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

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
    // backgroundImage: "url()",
    // backgroundSize: "cover",
  },
}));

const CartItems = () => {
  const classes = useStyles();
  const [cartItems, setCartItems] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/order")
      .then((r) => r.json())
      .then((d) => {
        setCartItems(d);
        console.log(d);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className={classes.megaContainer}>
      <Typography variant="h4">Cart Items</Typography>
      <div>
        {cartItems.map((item) => (
          <Typography variant="h6" key={key}>
            {item.name}{" "}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
