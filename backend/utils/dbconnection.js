import mongoose from "mongoose";

const dbconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log("Connected to mongodb successfully")
    } catch (error) {
        console.log("Failed to connect to mongodb", error);
    }
}

export default dbconnection;