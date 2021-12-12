/* Common Imports */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LjpContainer from "./LjpContainer";
import FooterSocialIcons from "./FooterSocialIcons";
import FooterCopyright from "./Copyright";

/* Component Imports */

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#232b2b",
    color: "#ffffff",
    boxShadow:
      "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
  },
  r: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    flexDirection: "row",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.r}>
          <FooterCopyright />
          <FooterSocialIcons />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
