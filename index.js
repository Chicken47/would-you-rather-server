import express from "express";
import wyrRoutes from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(cors());

app.use("/v1", wyrRoutes);

app.listen(PORT, () => {
  console.log(`WYR server is running on ${PORT}`);
});
