import express, {Express} from "express";
import cors from "cors";

// initialize express application
const app: Express = express();

//RB This is the temporary way for the allowed origin as we are currently running locally.
const allowedOrigin = 'http://localhost:5173';

// allow express to parse json
app.use(express.json());
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) {
            return callback(null, true);
        }
        
        if (origin === allowedOrigin)
        {
            callback(null, true);
        } else {
            // Just for now, in the future this would actually be important to add.
            return callback(new Error('This domain is prohibited from accessing this backend!'))
        }
    },
    methods: [
        'GET', 'POST', 'PUT', 'DELETE'
    ]

}));

// listen for requests on root and send simple text response
app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});


export default app;