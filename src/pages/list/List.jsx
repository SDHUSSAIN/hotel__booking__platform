import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from "date-fns"
import "./list.css"
import SearchItemList from '../../components/searchItemList/SearchItemList';

const List = () => {

  const location = useLocation();
  const [openDate, setOpenDate] = useState(false);

  const [date,setDate] = useState(location.state.date);
  const [destination, setDestination] = useState(location.state.destination);
  const [option, setOption] = useState(location.state.option);
  return (
    <div className='list'>
      <Navbar/>
      <Header type="list"/>
      <div className="list__container">
        <div className="list__wrapper">
          <div className="list__search">
            <h1 className="list__search__title">Search</h1>
              <div className="list__item">
                <label >Destination</label>
                <input placeholder={destination} type="text" />
              </div>
              <div className="list__item">
                <label>Check-in Date</label>
                <span onClick={()=>setOpenDate(!openDate)} >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                {
                  openDate && <DateRange  
                  onChange={item => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
                }
                
             
              </div>
              <div className="list__item">
                <label>Options</label>
                <div className="ls__option__item">
                  <span className="ls__option__item__text">Min price <small>per night</small></span>
                  <input type="number" className='ls__option__item__input'/>
                </div>
                <div className="ls__option__item">
                  <span className="ls__option__item__text">Max price <small>per night</small></span>
                  <input type="number" className='ls__option__item__input'/>
                </div>
                <div className="ls__option__item">
                  <span className="ls__option__item__text">Adult </span>
                  <input type="number" min={1} className='ls__option__item__input' placeholder={option.adult}/>
                </div>
                <div className="ls__option__item">
                  <span className="ls__option__item__text">Children </span>
                  <input type="number"min={0} className='ls__option__item__input' placeholder={option.children}/>
                </div>
                <div className="ls__option__item">
                  <span className="ls__option__item__text">Room </span>
                  <input type="number" min={1} className='ls__option__item__input' placeholder={option.room}/>
                </div>
              </div>
              <button className='ls__search__button'>Search</button>
          </div>
          <div className="list__results">
            <SearchItemList/>
            <SearchItemList/>
            <SearchItemList/>
            <SearchItemList/>
            <SearchItemList/>
            <SearchItemList/>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default List