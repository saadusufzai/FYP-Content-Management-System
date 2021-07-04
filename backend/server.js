const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.disable('x-powered-by')
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
const contactRouter = require("./routes/contact");
const messageRouter = require("./routes/message");
const userRouter = require("./routes/users");


app.use("/api/contact", contactRouter);
app.use('/api/message', messageRouter);
app.use('/api/user', userRouter)


app.get("/", (req, res) => {
  res.json({
    message: "Welcome to epo.org.pk APIs.",
    developer: "Saad Aslam",
    links: {
      github_Link: "https://github.com/saadusufzai",
      facebook: "https://www.facebook.com/saadusufzai",
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);


  const uri = process.env.ATLAS_URI;
  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("MongoDB database connection is successfully established");
  });
});
