import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  sec: {
    background: "#2d2d30",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // border: "4px solid",
    margin: "2rem 0rem 0rem 0rem",
    width: "100%",
    height: "50%",
  },
  next: {
    top: "calc(50 % -20)",
    position: "absolute",
    background: "white",
    borderRadius: "30px",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
  },
  next: {
    right: "10px",
    fontWeight: "bold",
    fontSize: "18px",
    fontWeight: "bold",
    fontSize: "50px",
    margin: "2rem 2rem 0rem 2rem",
    borderRadius: "30px",
  },

  prev: {
    left: "10px",
    transform: "scale(-1)",
    fontWeight: "bold",
    fontSize: "50px",
    margin: "2rem 2rem 0rem 0rem",
    borderRadius: "30px",
  },
}));
const variants = {
  enter: (direction = Number) => {
    return {
      //   x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction = Number) => {
    return {
      zIndex: 1,
      //   x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset = Number, velocity = Number) => {
  return Math.abs(offset) * velocity;
};

export const Example = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const classes = useStyles();

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection = Number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className={classes.sec}>
        <div className={classes.prev} onClick={() => paginate(-1)}>
          {"‣"}
        </div>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            width={1400}
            height={512}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div className={classes.next} onClick={() => paginate(1)}>
          {"‣"}
        </div>
      </div>
    </>
  );
};
