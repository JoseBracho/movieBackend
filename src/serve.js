const express = require("express");
const cors = require("cors");

const dbConnection = require("./db/mongoose.config");

class Serve{ 
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.initialServe();
        this.getMongooseConnection();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
    }
    initialServe(){
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`)
        })
    }
    async getMongooseConnection(){
        await dbConnection();
    }
    routes(){
        this.app.use('/', express.static('public'))
        this.app.use('/auth', require("./routes/auth.routes")); 
        this.app.use('/profile', require("./routes/profile.routes")); 
        this.app.use('/movie', require("./routes/comments.routes")); 
        this.app.use('/movie', require("./routes/movie.routes")); 
    }
}
module.exports = Serve;