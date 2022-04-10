var jwt = require('jsonwebtoken')

module.exports() = (req,res,next)=>{

     try{
         let token = req.headers.authorization.split(" ")[1];
         jwt.verify(token,"secret-key-for-token");
         next();
     }
     catch(error){
        res.status(401).send({"message":"Token is not valid"})
     }
}