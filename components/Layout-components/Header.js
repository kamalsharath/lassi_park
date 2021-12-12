import React from "react";
import Link from "next/link";
import Image from "next/image";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  hh: {
    backgroundColor: "#232b2b",
    padding: "1rem 1rem 1rem 1rem",
    margin: "0rem 0rem 0rem 0rem",
    gap: "1rem",
    display: "flex",
    color: "white",
    // flexDirection: "row",
    justifyContent: "space-between",
    boxShadow:
      "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",

    // alignItems: "center",
  },
  lj: {
    fontWeight: "bold",
    color: "white",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0rem 1rem 0rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      padding: "2rem 0rem 1rem 0rem",
    },
  },
  h: {
    fontSize: "1.5rem",
    padding: "2rem",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.hh}>
      <div className={classes.lj}>
        <Image
          src={"/treats-ice-creram.gif"}
          width={50}
          height={30}
          alt="shfois"
        />
        <h6>LASSI PARK</h6>
      </div>
      <div>
        <Link href="/">
          <a className={classes.h}>Home</a>
        </Link>
        <Link href="/Menu">
          <a className={classes.h}>Menu</a>
        </Link>

        <Link href="#about" rel="noopener" aria-label="about">
          <a className={classes.h}>About</a>
        </Link>

        <Link href="#contact">
          <a className={classes.h}>Contact</a>
        </Link>
        <Link href="/LoginLJP">
          <a className={classes.h}>Login</a>
        </Link>
      </div>
    </div>
  );
};
export default Header;
