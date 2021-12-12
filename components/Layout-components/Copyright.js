/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";

/* Component Imports */
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "60% ",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0rem 0rem 0rem 0rem",
    },
  },
  iconLabelRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.5rem",
    color: "#ffffff",
  },
}));

const FooterCopyrightInfo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.rootRow}>
        <Typography
          variant="body2"
          component="span"
          className={classes.iconLabelRow}
        >
          <Image
            src={"/copyright.png"}
            width={20}
            height={20}
            alt={"awhsdiu"}
          />
          {new Date().getFullYear()} Developers. All Rights Reserved.
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default FooterCopyrightInfo;
