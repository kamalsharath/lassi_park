import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout-components/Layout";
import Image from "next/image";
const useStyles = makeStyles((theme) => ({
  Page404: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    color: "#fff",
  },
}));
const Page404 = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Layout>
        <div className={classes.Page404}>
          <h1>404</h1>
          <Image
            src={"/treats-ice-creram.gif"}
            width={200}
            height={200}
            alt="ahfiua"
          />
          <h2>Page not found</h2>
        </div>
      </Layout>
    </React.Fragment>
  );
};
export default Page404;
