import { config } from "../config/Constants";
import mongoose from "mongoose";
export class mongoConnection{
    public async connect():Promise<void>{
        try {
            await mongoose.connect(config.MONGO_CONNECTION)
            console.log("connected")
        } catch (error) {
            console.error(error)
            process.exit(1)
        }
    }
}