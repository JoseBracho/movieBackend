const mongoose = require("mongoose");

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGOOSE_CONNECTION_LOCAL,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("Database Connected")
    }catch(err){
        console.log(err)
    }
}

module.exports = dbConnection;