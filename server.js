const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse request od content-type: applicaiton/jsno
app.use(bodyParser.json());

// parse request of content-type: application/x-ww-form-urlrncoded
app.use(bodyParser.urlencoded({ extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "welcome to application. "});
});

require("../api/routes/customer.routes")(app);

// set port, listen to requests
app.listen(3000, () => {
    console.log("server is running");
});