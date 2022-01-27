import Cors from "cors";
import mongoose from "mongoose";

const cors = Cors({
  methods: ["GET", "HEAD"],
});

const { Schema } = mongoose;

/* Middleware error handling */

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

/* API Route */

const StoreOrder = async (req, res) => {
  await runMiddleware(req, res, cors);

  /* Schema */

  const orderSchema = new Schema(
    {
      order_id: Number,
      username: String,
    },
    { collection: "order" }
  );

  /* Model */

  const Orders = mongoose.models.Order1
    ? mongoose.models.Order1
    : mongoose.model("Order1", orderSchema);

  await mongoose.connect(
    "mongodb+srv://dbuser:dbuser@cluster0.jyhfv.mongodb.net/lassipark?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  /* Prepare object to store */

  let validator = true;
  const missingFields = [];

  const orderToStore = {
    order_id: Math.floor(Math.random() * 10),
    username: req.query.username ? req.query.username : "undefined",
  };

  if (orderToStore.username == undefined) {
    validator = false;
    missingFields.push("name");
  }

  let response = null;

  if (validator) {
    response = {
      status: "success",
      payload: (await new Orders(orderToStore).save())._doc,
      missingFields: null,
      error: null,
    };
  } else {
    response = {
      missingFields: missingFields,
      status: "failure",
      error: "Field(s) are missing!",
      payload: orderToStore,
    };
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(response));
  // mongoose.connection.close();
};

export default StoreOrder;
