import mongoose from "mongoose";

export const connecttodb=async () => {
    try {
        console.log("attempting  to connect to the database")
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to the database")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}