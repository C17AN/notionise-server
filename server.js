import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { accountRouter } from "./routes/account.js";

const app = express();
const PORT = process.env.PORT || 5000;

const CONNECTION_URL =
  "mongodb+srv://admin:recharge1@cluster0.afcrj.mongodb.net/notionize?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use("/user", accountRouter);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT} `)))
  .catch((err) => console.log(err.message));
