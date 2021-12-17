import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    padding: "1rem 0rem 0rem 6rem",
    backgroundImage: "url(bg.jpg)",
    backgroundSize: "cover",
  },
  Lg: {
    // backgroundColor: "white",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // width: "70vw",
    // height: "70vh",
  },
  typo1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "5rem",
  },
  bt: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    backgroundColor: "black",
    color: "white",
    width: "10rem",
    height: "2rem",
  },
  inp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    backgroundColor: "white",
    color: "black",
    borderRadius: "5px",
    border: "1px solid black",
    width: "20rem",
    height: "2rem",
  },
}));
const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.loginContainer}>
      <div className={classes.Lg}>
        {/* <img src="juice.gif" width={500} /> */}
        <div>
          <Typography className={classes.typo1} variant="h3">
            Login
          </Typography>
          <div className={classes.text}>
            <Typography>
              <input
                type="text"
                placeholder="Username"
                className={classes.inp}
              />
            </Typography>
            <Typography>
              <input
                type="password"
                placeholder="Password"
                className={classes.inp}
              />
            </Typography>
            <Typography>
              <button  variant="submit"className={classes.bt}>Login</button>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
