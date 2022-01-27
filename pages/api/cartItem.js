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

const Cart = async (req, res) => {
  await runMiddleware(req, res, cors);

  /* Schema */

  const orderSchema = new Schema(
    {
      name: String,
    },
    { collection: "contact" }
  );

  /* Model */

  const Order = mongoose.models.Carts
    ? mongoose.models.Carts
    : mongoose.model("Carts", orderSchema);

  await mongoose.connect(
    "mongodb+srv://dbuser:dbuser@cluster0.jyhfv.mongodb.net/lassipark?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  const data = await Order.find();
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
  // mongoose.connection.close();
};

export default Cart;
