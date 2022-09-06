import Room from "../../api/models/Room.js"
import Hotel from "../../api/models/Hotel.js"


//create room

export const createRoom = async (req, res)=>{
    const hotelId = req.params.hotelid ;
    const newRoom = new Room(req.body);
    console.log(hotelId);

    try{
        const savedRoom = await newRoom.save() ;
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $push:
                {
                    rooms:savedRoom._id
                },
            });
        }catch(error){
            res.status(500).json(error);
        }

        res.status(200).json(savedRoom);

    }catch(error){
        res.status(500).json(error);
    }

}
//update room
export const updateRoom = async(req,res) =>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        
         res.status(200).json(updatedRoom);
    }catch(error){
     res.status(500).json(error);
    }

}
//delete room
export const deleteRoom = async(req,res) =>{
    const hotelId = req.params.hotelid ;
    try{
        await Room.findByIdAndDelete(req.params.id);
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $pull:
                {
                    rooms:req.params.id
                },
            });
        }catch(error){
            res.status(500).json(error);
        }
        res.status(200).json("Room deleted successfully");
    }catch(error){
     res.status(500).json(error);
    }

} 
//get room
export const getRoom = async(req,res) =>{

    try{
        const room = await Room.findById(req.params.id);
         res.status(200).json(room);
    }catch(error){
     res.status(500).json(error);
    }

}
//get all rooms
export const getRooms = async(req,res) =>{
    try{
        const rooms = await Room.find();
         res.status(200).json(rooms);
    }catch(error){
     res.status(500).json(error);
    }
}