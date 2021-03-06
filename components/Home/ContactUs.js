import React from "react";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  contact: {
    background: "#f5f5f5",
    padding: "100px 0",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sec: {
    background: "#2d2d30",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "4px solid",
  },
  frm: {
    margin: "3rem 0",
    gap: "3rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inp: {
    width: "100%",
    background: "transparent",
    fontSize: "20px",
    color: "white",
    borderRadius: "5px",
  },
  bt: {
    backgroundColor: "black",
    color: "white",
    width: "100px",
    height: "50px",
    fontSize: "20px",
    borderRadius: "10px",
    margin: "2px 0px 2px 0px",

    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  btC: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: "2px 0px 20px 0px",
  },
  clah: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "5rem",
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const textFeildOne = (event) => {
    setName(event.target.value);
  };
  const textFeildTwo = (event) => {
    setEmail(event.target.value);
  };
  const textFeildThree = (event) => {
    setMessage(event.target.value);
  };

  const submitForm = (e) => {
    fetch(
      "/api/contact?name=" + name + "&email=" + email + "&message=" + message
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className={classes.constact} id="contact">
      <div className={classes.sec}>
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          urna eget aliquet eleifend, nisi nunc pretium enim, eu euismod nisl
          nunc eget lorem.
        </p>
        <div className={classes.constact}>
          <form className={classes.clah}>
            <div>
              <div className={classes.frm}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className={classes.inp}
                  value={name}
                  id="name"
                  placeholder="Enter your name"
                  onChange={textFeildOne}
                />
              </div>
              <div className={classes.frm}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className={classes.inp}
                  id="email"
                  value={email}
                  onChange={textFeildTwo}
                  placeholder="Enter your email"
                />
              </div>
              <div className={classes.frm}>
                <label htmlFor="message">Message</label>
                <textarea
                  className={classes.inp}
                  id="message"
                  rows="3"
                  value={message}
                  onChange={textFeildThree}
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className={classes.btC}>
                <button
                  type="submit"
                  className={classes.bt}
                  onClick={submitForm}
                >
                  Submit
                </button>
              </div>
            </div>
            <div>
              <Image
                src={"/clipart2451934.png"}
                width={300}
                height={300}
                alt={"sghdfius"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
