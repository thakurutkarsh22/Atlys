const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const postsRouter = require("./routes/posts");
const authRoute = require("./routes/auth");

const PORT = process.env.PORT || 3001;
dotEnv.config();

const app = express();
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/posts", postsRouter);

// node server for serving the files for our react app.
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Server says Hi!!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Connection to Mongo DB
const dburl = process.env.DB_URL_DEV;
mongoose
  .connect(dburl + "/atlys_mini_forum", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("db connected!!!"))
  .catch("DB connection FAILED!!!");

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
