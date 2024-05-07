import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
const app = express()
import Bookroute from "./route/book.route.js"
import cors from "cors"
app.use(cors())

dotenv.config();

const PORT = process.env.PORT ||3000;
const URI = process.env.MongodbURI;

//cannecttomongoDB.........
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
db.once('open', () => {
    console.log('Connected to MongoDB');
});
//definding routes......

app.use("/Book", Bookroute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})