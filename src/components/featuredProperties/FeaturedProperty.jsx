import React from 'react'
import "./featuredProperty.css"
import useFetch from '../../Hooks/useFetch'

const FeaturedProperty = () => {

    const {data,loading,error} = useFetch("http://localhost:5000/api/hotels?featured=true&limit=4");
    
  return (
    <div className='fp'>
        {
            loading ? ("Loading please wait...") : (
            <>
            {
                data.map((item,i)=>{
                    return (
                        <div className="fp__container" key={i}>
                            <img src={item.photos.length !==0 ? item.photos[0] : "https://cf.bstatic.com/xdata/images/city/max500/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="} alt="" className='fp__image' />
                            <span className="fp__name">{item.name}</span>
                            <span className="fp__city">{item.city}</span>
                            <span className="fp__price">Starting from Rs.{item.cheapestPrice}</span>
                            {
                                item.rating && <div className="fp__rating">
                                    <button>{item.rating}</button>
                                    <span>Excellent</span>
                                </div>

                            }
                            
                        </div>

                    )
                })
            }
            
        </>)
        }
        
        

    </div>
  )
}

export default FeaturedProperty