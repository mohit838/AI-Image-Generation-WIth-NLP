const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use("/openai", require("./routes/openAIRoutes"));

// Port Testing
app.listen(port, () => console.log(`Server Listening On Port ${port}`));
