import dotenv from "dotenv";
dotenv.config();
//console.log("ENV TEST:", process.env.STRIPE_SECRET_KEY);

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors({
    origin: "https://online-food-ordering-system-3ogb5i4z9-monukumawas-projects.vercel.app"
}));

//db connection 
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/orders",orderRouter)

app.get("/",(req,res)=> {
    res.send("API Working")
});

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})
//mongodb+srv://monukumwat14_db_user:<db_password>@cluster0.h1lslfp.mongodb.net/?


