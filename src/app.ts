import express from "express";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import cors from "cors";
import routes from "./routes/v1/index";

require("dotenv").config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(compression());
app.use(cors());
app.options("*");

app.use("/v1", routes);

app.listen(process.env.PORT, () => {
	console.log("Listening on port", process.env.PORT);
});
