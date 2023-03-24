import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';


import router from './router';

const app = express();

// app.use(cors({
//     credentials: true,
// }));
app.use(cors())
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app);

server.listen(8080,()=>{
    console.log("server is running on the port")
});

const MONGO_URL='mongodb+srv://mohiniprasad:ec3adJi21DnDqC3p@cluster0.gutr0hj.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error',(error:Error)=> console.log(error));

app.use('/', router());