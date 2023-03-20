const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// Enable Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static Folder For FrontEnd
app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", require("./routes/openAIRoutes"));

// Port Testing
app.listen(port, () => console.log(`Server Listening On Port ${port}`));
