import express  from 'express';
import { PORT } from './config.js';
import signUp from './routes/signUp.js';
import { db } from './database/db.js';
import cookieParser from 'cookie-parser'

const app = express();
db.connect();

app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).send('Hello World');
})

app.use('/api/user',signUp);
app.use(cookieParser());


const server = app.listen(PORT,()=>{  
    console.log(`App is running on port ${PORT}`);
});

server.on('close', () => {
    console.log("Server is shutting down. Closing DB connection...");
    db.end((err) => {
        if (err) {
            console.error("Error closing DB connection:", err);
        } else {
            console.log("DB connection closed successfully.");
        }
    });
});
