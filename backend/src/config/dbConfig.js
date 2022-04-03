/* connect with MogoDB database */

import mongoose from 'mongoose';

const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to DB")
    } catch (error) {
        console.log("Unable to connect to DB.")
    }
}

export default dbConnect;
