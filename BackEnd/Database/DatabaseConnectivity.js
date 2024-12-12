import mongoose from 'mongoose';


export const DatabaseConnectivity = async() =>{
    try{
       const connectivity = await mongoose.connect(process.env.MONGOS_URL)
    //    console.log("connectivity", connectivity);
    //    console.log("process data", process)
    }catch(error){
        console.log(`Error connecting to MongoDB: ${error}`)
    }
}