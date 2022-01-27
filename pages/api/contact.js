import Cors from "cors";
import mongoose from "mongoose";

const cors = Cors({
  methods: ["GET", "HEAD"],
});

const { Schema } = mongoose;

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

const Contact = async (req, res) => {
  await runMiddleware(req, res, cors);
  const contactSchema = new Schema(
    {
      name: String,
      email: String,
      message: String,
    },
    { collection: "contact" }
  );

  const Contacts = mongoose.models.Contact1
    ? mongoose.models.Contact1
    : mongoose.model("Contact1", contactSchema);

  await mongoose.connect(
    "mongodb+srv://dbuser:dbuser@cluster0.jyhfv.mongodb.net/lassipark?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  let validator = true;
  const missingFields = [];

  const contactToStore = {
    name: req.query.name ? req.query.name : "undefined",
    email: req.query.email ? req.query.email : "undefined",
    message: req.query.message ? req.query.message : "undefined",
  };

  if (contactToStore.name === "undefined") {
    missingFields.push("name");
    validator = false;
  }

  if (contactToStore.email === "undefined") {
    missingFields.push("email");
    validator = false;
  }

  if (contactToStore.message === "undefined") {
    missingFields.push("message");
    validator = false;
  }

  let response = null;

  if (validator) {
    const contact = new Contacts(contactToStore);
    contact.save();
    response = {
      status: 200,
      message: "Successfully sent your message",
    };
  } else {
    response = {
      status: 400,
      message: "Missing fields",
      missingFields: missingFields,
    };
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(response));
//   mongoose.connection.close();
};

export default Contact;
