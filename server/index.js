import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from '../config.env'

//internal imports
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = process.env.MONGOAPIKEY;
const PORT = process.env.PORT || 5000;

//accepts two different parameters before but not now
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);

//https://www.mongodb.com/atlas/database
