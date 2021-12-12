/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";

/* Component Imports */
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end ",
    // width: "100% ",
    gap: "1rem",
    margin: "2 auto",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0rem 1rem 0rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      padding: "2rem 0rem 1rem 0rem",
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

const FooterSocialIcons = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.rootRow}>
        {/* Twitter */}
        <Link rel="noopener" title="Twitter" target="_blank">
          <Image
            src={"/icons8-twitter-circled-48.png"}
            height="18"
            width="18"
            alt="Twitter"
            className={classes.iconLabelRow}
          />
        </Link>

        {/* Instagram */}
        <Link rel="noopener" title="Instagram" target="_blank">
          <Image
            src={"/icons8-instagram-48.png"}
            height="18"
            width="18"
            alt="Instagram"
            className={classes.iconLabelRow}
          />
        </Link>

        {/* Facebook */}
        <Link rel="noopener" title="Facebook" target="_blank">
          <Image
            src={"/icons8-facebook-16.png"}
            height="18"
            width="18"
            alt="Facebook"
            className={classes.iconLabelRow}
          />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default FooterSocialIcons;
