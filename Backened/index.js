import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import cors from "cors"

import noteRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"


const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

dotenv.config()

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDbURI



try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("mongodb is connected with this server")
} catch (error) {
    console.log(`Here error is` + error)
}

// defining routes
app.use("/note", noteRoute);
app.use("/user", userRoute);

app.get('/',(req,res)=>{
res.send({
    activeStatus:true,
    error:false,
})
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});
