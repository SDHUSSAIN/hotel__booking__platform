import React from 'react'
import "./hotel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faCircleXmark,faCircleArrowLeft,faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Mail from '../../components/mailSubscription/Mail'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'
const Hotel = () => {

  const [slideNumber,setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleSlider = (i) => {
    setSlideNumber(i);
    setOpen(true);

  }

  const handleMove = (direction) =>{
    let newSlideNumber;
    if(direction==="l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1 ;
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber +1 ;
    }

    setSlideNumber(newSlideNumber);
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotel__container">
        {open && <div className="slider">
              <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
              <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
              <div className="slider__wrapper">
                <img src={photos[slideNumber].src} className='slider__image' alt="hotelbigimage" />
              </div>
              <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotel__wrapper">
          <button className='book__now'>Reserve Now</button>
          <h1 className="hotel__title">Taj Palace</h1>
          <div className="hotel__address">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Udaipur Rajasthan 123133</span>
          </div>
          <span className="hotel__distance">
            Excellent location - 500m from city center
          </span>
          <span className="hotel__highlight">
            Book a stay over Rs.15000 at this property and get a free airport taxi
          </span>
          <div className="hotel__images">
            {photos.map((photo,i)=>{
              return (
                <div  key ={i} className="image__wrapper">
                  <img src={photo.src} onClick={()=> handleSlider(i)} alt="hotelimage" />
                </div>
              )
            })}
            
          </div>
          <div className="hotel__details">
            <div className="hotel__detail__text">
              <h1 className='hotel__detail__title'>Taj Palace</h1>
              <p className='hotel__detail__desc'>This is one of the best hotel in the town with mesmerizing beauty and world class hospitality there are 5 separate gardens and restaurent each has its own unique experience.It is called the romance house of the kings as it is built by the kings for their summer vacations.When you enter this hotel you found a calm and peachfull environment with such a great staff which take care of you like your beloved guests</p>
            </div>
            <div className="hotel__detail__price">
              <h1>Perfect for 9-night stay !</h1>
              <span>Located on the best lake of Rajasthan and offers best world class hospitality</span>
              <h2><b>Rs.945</b> (9 nights)</h2>
              <button>Reserve or Book now</button>
            </div>
          </div>
        </div>
        <Mail/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Hotel