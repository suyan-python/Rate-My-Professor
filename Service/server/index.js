import express from "express";
import cors from "cors";

import router from "./routes/routes.js";
import dbConnection from "./database/db.js";

const app = express();

app.use(cors());
app.use("/", router);

const PORT = 8000;

dbConnection();

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
