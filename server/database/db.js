import mongoose from "mongoose"
export const Connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-v674pra-shard-00-00.s70zilm.mongodb.net:27017,ac-v674pra-shard-00-01.s70zilm.mongodb.net:27017,ac-v674pra-shard-00-02.s70zilm.mongodb.net:27017/?ssl=true&replicaSet=atlas-btvuv6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=E-Commerce-Web`;
    try{
       await mongoose.connect(URL)
       console.log("Database Connected Successfully")
    }
    catch(error){
        console.log('Error while connecting with the database',error.message)
    }
}
export default Connection