import express, { Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";
import "dotenv/config"; 
import {
  ClerkExpressRequireAuth,
  ClerkExpressWithAuth,
  LooseAuthProp,
  WithAuthProp,
} from '@clerk/clerk-sdk-node';

dotenv.config();
connectDb();

const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// Adjusting global namespace for Express Request
declare module 'express-serve-static-core' {
  interface Request extends LooseAuthProp {}
}

app.use(ClerkExpressWithAuth());



app.use("/api/", shortUrl);

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});
