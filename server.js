
const express = require("express");
const apirouter = require("./route/userroute");
const errorHandler = require("./middleware/errorHandler");

const PORT = 5000;

const app = express();

app.use(express.json());

app.use("/api/auth", apirouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});