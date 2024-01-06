import express from "express";
import morgan from "morgan";
import "dotenv/config";
import cors from "cors";

const app = express();

const whiteList = [process.env.DEPLOY_CLIENT_URL, "http://localhost:3000"];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       console.log("😲😲😲 =>", origin);
//       if (!origin || whiteList.includes(origin)) {
//         return callback(null, origin);
//       }
//       return callback("Error de CORS origin: " + origin + " No autorizado!");
//     },
//     credentials: true,
//   })
// );

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listen on port", port);
});
