import Hotel from "../../api/models/Hotel.js"

export const createHotel = async(req,res) => {
    const newHotel = new Hotel(req.body);
   try{
       const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
   }catch(error){
    res.status(500).json(error);
   }
}

export const updateHotel = async(req,res) =>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
         res.status(200).json(updatedHotel);
    }catch(error){
     res.status(500).json(error);
    }

}
export const deleteHotel = async(req,res) =>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
         res.status(200).json("Hotel deleted successfully");
    }catch(error){
     res.status(500).json(error);
    }

}
export const getHotel = async(req,res) =>{
    try{
        const hotel = await Hotel.findById(req.params.id);
         res.status(200).json(hotel);
    }catch(error){
     res.status(500).json(error);
    }

}
export const getHotels = async(req,res) =>{
    const {min,max,...others} = req.query ;
    try{
        const hotels = await Hotel.find({...others,cheapestPrice:{$gt:min || 1,$lt:max || 10000}}).limit(req.query.limit);
         res.status(200).json(hotels);
    }catch(error){
     res.status(500).json(error);
    }
}

export const countByCity = async(req,res)=>{
    try{
        const cities = req.query.cities.split(",");
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city});
        }))
        res.status(200).json(list);
    }catch(error){
        res.status(500).json(error);
    }
}

export const countByType = async(req,res)=>{
    try{
        const hotels = await Hotel.countDocuments({type:"Hotel"});
        const appartments = await Hotel.countDocuments({type:"Appartment"});
        const resorts = await Hotel.countDocuments({type:"Resort"});
        const villas = await Hotel.countDocuments({type:"Villa"});
        const cabins = await Hotel.countDocuments({type:"Cabin"});
        const cottages = await Hotel.countDocuments({type:"Cottage"});
        
        res.status(200).json([
            {
                type:"hotel",
                count:hotels
            },{
                type:"appartment",
                count:appartments
            },
            {
                type:"resort",
                count:resorts
            },
            {
                type:"villa",
                count:villas
            },
            {
                type:"cabin",
                count:cabins
            },
            {
                type:"cottage",
                count:cottages
            }
        ]);
    }catch(error){
        res.status(500).json(error);
    }
}

