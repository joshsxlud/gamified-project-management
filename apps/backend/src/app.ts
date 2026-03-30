import express, {Express} from "express";
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


export default app;