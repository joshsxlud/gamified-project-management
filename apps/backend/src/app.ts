import express, {Express} from "express";
import taskRoutes from "./api/v1/routes/taskRoutes";

// initialize express application
const app: Express = express();


// allow express to parse json
app.use(express.json());

// listen for requests on root and send simple text response
app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});

app.use("/api/v1", taskRoutes);


export default app;