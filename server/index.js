import express from "express";
import dotenv from 'dotenv'
import dbConnect from "./db/dbconnect.js";
import router from "./routes/authUser.js";


const app = express();
dotenv.config();

app.use(express.json());
app.use('/api/auth', router);

const PORT = process.env.PORT;


app.get("/", (req,res)=>{
    res.send('server response to browser')
})

app.listen(PORT, () => {

    dbConnect();
    console.log(`server at ${PORT}`);
 
    
})



//indexOf
// function indexof (arr, value){
//     for (let i=0; i< arr.length; i++)
//         if(arr[i] === value){
//             return i;

// }
// return -1
// }


//map