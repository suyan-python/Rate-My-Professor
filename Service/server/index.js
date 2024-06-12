import express from "express";
import cors from "cors";

import router from "./routes/routes.js";
import dbConnection from "./database/db.js";

const app = express();

app.use(cors());
app.use("/", router);

const PORT = 8000;

dbConnection();

const server = app.listen(PORT, () => {
  const ip = server.address();
  console.log(ip);
  console.log(ip + `Server is Running on PORT ${PORT}`);
});
