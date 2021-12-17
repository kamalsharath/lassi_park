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

const AllOrders = async (req, res) => {
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
  const data = await Orders.find();
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
  mongoose.connection.close();
};

export default AllOrders;
