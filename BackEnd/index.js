import express from 'express';
import { DatabaseConnectivity } from './Database/DatabaseConnectivity.js';
import dotenv from 'dotenv';
import routes from './routes/AuthRoutes.js';
// import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
//middleware 
app.use(express.json());  //for application parse

// app.use(cookieParser());
//auth routes
app.get('/', (req, resp) =>{
   resp.send("welcome in Authentication World")
});

app.use('/api/auth', routes); 

 //entry point
app.listen(3000,() =>{
    console.log("app running on port 3000")
});



// called databse connetivty component here..
DatabaseConnectivity();