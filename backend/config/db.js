import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://monukumwat14_db_user:pU44P9E3cwhkQ3ht@cluster0.h1lslfp.mongodb.net/food-del')
    .then(()=>console.log("DB connected"));
}