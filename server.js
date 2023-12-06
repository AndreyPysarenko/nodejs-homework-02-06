const mongoose = require("mongoose");
const app = require("./app");

const { DB_MONGO } = process.env;

mongoose
  .connect(DB_MONGO)
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
