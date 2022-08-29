const express = require("express");
const User = require("./src/model/user");
const Booking = require("./src/model/booking");
const Vendor = require("./src/model/vendor");
const { validateBody } = require("./src/middleWare/validation");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://parulyadav2022:functionup2022@cluster0.nnpfr.mongodb.net/cityLinkAssignment",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Successfully connected to database"))
  .catch((err) => console.log(err));



app.post("/order", validateBody, async (req, res) => {
  try {
    await User.create(req.body.customer);
    let bookingData = {
      source: req.body.source,
      destination: req.body.destination,
    };
    await Booking.create(bookingData);
    await Vendor.create(req.body.vendor);
    res
      .status(200)
      .send({ status: true, message: "Data received successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ status: false, err: err.message });
  }
});



app.listen(3000, () => {
  console.log(`Server is running at PORT 3000`);
});
