import mongoose from "mongoose"

const connectDB = async() =>{
    mongoose.connection.on("connected",()=>{
        console.log("DB Connected");
    })

    await mongoose.connect(`${process.env.MONGO_URL}/e-commerce`)
}
// 106.192.199.132 Anshika1@2
// mongodb+srv://Anshika:Anshika1@2@cluster0.zdb5a4z.mongodb.net/?appName=Cluster0
export default connectDB;