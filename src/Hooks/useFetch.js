import {useState,useEffect} from 'react'
import Axios from 'axios'


const useFetch =(url)=>{
    const [data,setData] = useState([]);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);


    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const res = await Axios.get(url);
                setData(res.data);

            }catch(error){
                setError(error)
            }
            setLoading(false);
        }
        fetchData();
    },[url]);

    const refetchData = async ()=>{
        setLoading(true);
        try{
            const res = await Axios.get(url);
            setData(res.data);

        }catch(error){
            setError(error)
        }
        setLoading(false);
    }

    return {data,loading,error,refetchData};
};

export default useFetch;