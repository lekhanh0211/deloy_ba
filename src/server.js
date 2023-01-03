import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRouter from "./router/api";
import connectDb from "./config/connectDb";
import cors from "cors";
import bodyParser from 'body-parser';

require("dotenv").config();

const app = express();
const port = process.env.PORT;

//Config CORS

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);

initWebRouter(app);

connectDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
