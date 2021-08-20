import express,{Request,Response} from "express";
import  mongoose  from "mongoose";
import {router} from "./routes/routes";
// import { getData,sendData,sendManyData,getSpecificData,deleteSpecificData} from "./database/data";

const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json());
// sendData();
// sendManyData();
// getData();
// getSpecificData();
// deleteSpecificData();
mongoose.connect(
    // process.env.MONGODB_URL as string,
    "mongodb+srv://Ritik:86BWEyyqI2viYAI7@cluster0.pf2yh.mongodb.net/myfirstdatabase?retryWrites=true&w=majority",
    {
        useUnifiedTopology:true,
        useNewUrlParser:true
    },

    ()=>{
        console.log("Db Connected!!");
    }
)
app.use("/", router);

app.listen(8080, ()=>{
    console.log("Server Running at 8080");
})