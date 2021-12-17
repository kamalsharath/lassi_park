import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
/* Component Imports */
const useStyles = makeStyles((theme) => ({
  megaContainer: {
    backgroundImage: `url(s4.jpg)`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    boxShadow: " 0 0 1rem 0.2rem rgb(0 0 0 / 80%)",
    padding: "0px 50px 0px 0px",
  },
  megaContainer1: {
    backgroundImage: `url(s2.jpg)`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    boxShadow: " 0 0 1rem 0.2rem rgb(0 0 0 / 80%)",
  },
  megaContainer2: {
    backgroundImage: `url(s3.jpg)`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    boxShadow: " 0 0 1rem 0.2rem rgb(0 0 0 / 80%)",

    marginBottom: "10rem",
  },
  heading: {
    width: "100%",
    color: "#202020",
    fontWeight: 400,
    fontSize: "2.5rem",
    lineHeight: "3rem",
    color: "white",
  },
  heading1: {
    width: "100%",
    color: "#202020",
    fontWeight: 500,
    fontSize: "1.5rem",
    lineHeight: "1.5rem",
    color: "#fff",
  },
  subHeading: {
    margin: "0.5rem 0rem 0.5rem 0rem",
    width: "100%",
    color: "#666666",
    fontWeight: 400,
    fontSize: "1.1rem",
    lineHeight: "1.5rem",
    color: "#fff",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "#ffffff",
    padding: "23rem 0rem 0rem 55rem",
  },
  text1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "#ffffff",
    padding: "20rem 0rem 0rem 55rem",
  },
  text2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    color: "#ffffff",
    padding: "0rem 0rem 0rem 7rem",
  },
}));
const JustForFun = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.megaContainer}>
        <div className={classes.text}>
          <Typography variant="h1" component="h1" className={classes.heading}>
            Juice
          </Typography>
          <Typography
            variant="body2"
            component="span"
            className={classes.subHeading}
          >
            lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </div>
      </div>
      <div className={classes.megaContainer1}>
        <div className={classes.text1}>
          <Typography variant="h1" component="h1" className={classes.heading}>
            Lassi
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            className={classes.heading1}
          ></Typography>
          <Typography
            variant="body2"
            component="span"
            className={classes.subHeading}
          >
            lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </div>
      </div>
      <div className={classes.megaContainer2}>
        <div className={classes.text2}>
          <Typography variant="h1" component="h1" className={classes.heading}>
            Juice
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            className={classes.heading1}
          ></Typography>
          <Typography
            variant="body2"
            component="span"
            className={classes.subHeading}
          >
            lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
};
export default JustForFun;
