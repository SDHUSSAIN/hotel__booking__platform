import React from 'react'
import "./propertyList.css"
import useFetch from '../../Hooks/useFetch'

const PropertyList = () => {

  const {data,loading,error} = useFetch("http://localhost:5000/api/hotels/countByType");
  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg"


  ]
  
  return (
    <div className='propertyList'>
      {
        loading ? ("Loading please wait") : (
        <>
        {
          data && images.map((image,i)=>{
            return(
              <div className="property__list__contianer" key={i}>
                  <img src={image} alt="propertyImage"  className='property__image'/>
                  <div className="property__list__details">
                    <h3 className='property__type'>{data[i]?.type}</h3>
                    <h5 className='property__value'>{data[i]?.count} {data[i]?.type}</h5>
                  </div>
               </div>

            )
          })
        }
      </>)
      }
      
    </div>
  )
}

export default PropertyList