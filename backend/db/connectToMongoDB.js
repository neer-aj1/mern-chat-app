import mongoose, { mongo } from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to database");
    } catch (error) {
        console.log(`Error connecting to the database ${error.message}`);
    }
}

export default connectToMongoDB;