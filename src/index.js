const express = require("express");
const bodyParser = require("body-parser");
const cityOperation = require("./repository/city-repository");
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server started on port no : ${PORT} `);
    const result = await cityOperation.InsertData("Raipur");
    // console.log(result);
    // if (result == -1) {
    //   console.log("No such city");
    // } else if (result) {
    //   console.log("Successfully updated  the city");
    // } else {
    //   console.log("Error while updating city is : " + result);
    // }
  });
};

setupAndStartServer();
 