import express, {Express} from "express";
import cors from "cors";

// initialize express application
const app: Express = express();


// allow express to parse json
app.use(express.json());
app.use(cors());

// listen for requests on root and send simple text response
app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});


export default app;