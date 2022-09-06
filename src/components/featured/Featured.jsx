import React from 'react'
import useFetch from '../../Hooks/useFetch'
import "./featured.css"

const Featured = () => {

    const {data,error,loading} = useFetch("http://localhost:5000/api/hotels/countByCity?cities=Delhi,Mumbai,Shimla,Goa");

   
  return (
    
    <div className='featured'>
        {
          loading ? "Loading please wait" : <>
        
        
          <div className="featured__image__container">
              <img src="https://cf.bstatic.com/xdata/images/city/max500/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="cityimage" className='featured__image' />
              <div className="featured__image__title">
                  <h1>Delhi</h1>
                  <h2>{data[0]} properties</h2>
              </div>
          </div>
          <div className="featured__image__container">
              <img src="https://cf.bstatic.com/xdata/images/city/max500/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="cityimage" className='featured__image'/>
              <div className="featured__image__title">
                  <h1>Mumbai</h1>
                  <h2>{data[1]} properties</h2>
              </div>
          </div>
          <div className="featured__image__container">
              <img src="https://cf.bstatic.com/xdata/images/city/max500/684914.webp?k=bf24dd1161b27ac4c03f1eee31fd97c9c75c69b04dbbec19400702b182321268&o=" alt="cityimage" className='featured__image'/>
              <div className="featured__image__title">
                  <h1>Shimla</h1>
                  <h2> {data[2]} properties</h2>
              </div>
          </div>
          <div className="featured__image__container">
              <img src="https://cf.bstatic.com/xdata/images/region/max500/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" alt="cityimage" className='featured__image'/>
              <div className="featured__image__title">
                  <h1>Goa</h1>
                  <h2>{data[3]} properties</h2>
              </div>
          </div>
          </>
        }
        
    </div>
  )
}

export default Featured