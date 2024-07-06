const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");

const libraryRoute = require("./routes/usersRoute");
//const bookRoutes = require("./routes/booksRoutes");
//const authorsRoutes = require("./routes/authorRoutes");
app.use(express.json());
app.use("/lib", usersRoute);
//app.use("/book", bookRoutes);
//app.use("/author", authorsRoutes);
mongoose
  .connect("mongodb://127.0.0.1:27017/Travel")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.error(error);
  });
app.listen(port, () => {
  console.log("The api running ", port);
});
