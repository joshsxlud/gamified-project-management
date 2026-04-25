import express, {Express} from "express";
import taskRoutes from "./api/v1/routes/taskRoutes";
import departmentRoutes from "./api/v1/routes/departmentRoutes";
import cors from "cors";

import { corsOptions }  from "../config/cors";

// initialize express application
const app: Express = express();

// cors middleware
app.use(cors(corsOptions));

// allow express to parse json
app.use(express.json());

// listen for requests on root and send simple text response
app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});

app.use("/api/v1", taskRoutes);
app.use("/api/v1", departmentRoutes);


export default app;