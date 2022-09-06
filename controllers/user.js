import User from "../../api/models/User.js"



export const updateUser = async(req,res) =>{
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
         res.status(200).json(updatedUser);
    }catch(error){
     res.status(500).json(error);
    }

}
export const deleteUser = async(req,res) =>{
    try{
        await User.findById(req.params.id);
         res.status(200).json("User deleted successfully");
    }catch(error){
     res.status(500).json(error);
    }

}
export const getUser = async(req,res) =>{
    try{
        const user = await User.findById(req.params.id);
         res.status(200).json(user);
    }catch(error){
     res.status(500).json(error);
    }

}
export const getUsers = async(req,res) =>{
    try{
        const users = await User.find();
         res.status(200).json(users);
    }catch(error){
     res.status(500).json(error);
    }
}
