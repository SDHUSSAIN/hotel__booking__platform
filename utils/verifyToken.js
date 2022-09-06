import JWT from "jsonwebtoken"


export const verifyToken = (req,res,next) =>{
    const token = req.cookies.access_token ;
   
    if(!token){
        res.status(401).json(token);
    }

    JWT.verify(token,process.env.JWT_SECRET,(error,user)=>{
        if(error) return res.status(403).json(error);
        req.user = user ;
        next();
        
    })
}

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
          
            // res.status(200).json("You are authenticated to make changes to this account");
            next();
            
           
        }else{
            res.status(403).json("You are not authenticated to make changes to this account");
        }
    })
}
export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
            // res.status(200).json("You are authenticated to make changes to this account");
            
        }else{
            res.status(403).json("You are not authenticated to make changes to this account");
        }
    })
}