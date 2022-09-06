import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import "../header/header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from "date-fns"

const Header = ({type}) => {
    const [ hideshow, setHideShow] = useState(false) ;
    const [hideShowOption,setHideShowOption] = useState(false);
    const [destination, setDestination] = useState("");


    const navigate = useNavigate();


    const [option, setOption] = useState({
        adult:1,
        children:0,
        room:1
    })

    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
        }
    ]);



    const handleClick =(name, operation )=>{
        setOption((prev)=>{return {...prev, [name]:operation === "plus" ? option[name]+1 : option[name]-1}})
    }

    const handleSearch = ()=>{
        navigate("/hotels",{state:{destination,date,option}});
    }
  return (

    <div className='header'>
        <div className={type==="list" ?"header__container list__mode" :"header__container" }>
        <div className="header__list">
            <div className="header__list__item active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>

            </div>
            <div className="header__list__item">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>

            </div>

            <div className="header__list__item">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>

            </div>

            <div className="header__list__item">
                <FontAwesomeIcon icon={faUmbrellaBeach} />
                <span>Attractions</span>

            </div>

            <div className="header__list__item">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport Taxis</span>

            </div>


        </div>
        {
         type!=="list" &&  <>
            <h1 className="header__title">A lifetime of discounts? It's Genius</h1>
        <p className='header__description'>Get rewarded for your travels - unlock instant savings of 10% or more with a free Saddam Booking account</p>
        <button className='header__button'>Sign in / Register</button>
        <div className="header__search">
            <div className="header__search__box">
                <FontAwesomeIcon icon={faBed} className='header__search__icon'/>
                <input type="text" placeholder='Where are you going ?' className='header__search__input' onChange={(e)=>setDestination(e.target.value)} />
            </div>
            <div className="header__search__box">
                <FontAwesomeIcon icon={faCalendarDays} className='header__search__icon'/>
                <span onClick={()=> setHideShow(!hideshow)} className='header__search__text'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                {
                    hideshow && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date__picker'
                    minDate={new Date()}
                />
                }
                
            </div>
            <div className="header__search__box">
                <FontAwesomeIcon icon={faPerson} className='header__search__icon'/>
                <span onClick={()=>setHideShowOption(!hideShowOption)} className='header__search__text'>{`${option.adult} Adult . ${option.children} Children . ${option.room} Room`}</span>
                {
                    hideShowOption && <div className="options">
                    <div className="option__item">
                        <span className="option__text">Adult</span>
                        <div className="option__counter">
                            <button className="option__btn" onClick={()=>handleClick("adult","plus")} >+</button>
                            <span className="counter__value">{option.adult}</span>
                            <button disabled={option.adult <=1} className="option__btn" onClick={()=>handleClick("adult","minus")}>-</button>
                        </div>
                    </div>
                    <div className="option__item">
                        <span className="option__text">Children</span>
                        <div className="option__counter">
                            <button className="option__btn" onClick={()=>handleClick("children","plus")}>+</button>
                            <span className="counter__value">{option.children}</span>
                            <button disabled={option.children<=0} className="option__btn" onClick={()=>handleClick("children","minus")}>-</button>
                        </div>
                    </div>
                    <div className="option__item">
                        <span className="option__text">Room</span>
                        <div className="option__counter">
                            <button className="option__btn" onClick={()=>handleClick("room","plus")}>+</button>
                            <span className="counter__value">{option.room}</span>
                            <button className="option__btn" disabled={option.room <=1} onClick={()=>handleClick("room","minus")}>-</button>
                        </div>
                    </div>
                </div>
                }
                
            </div>
            <div className="header__search__box">
                <button className='header__button' onClick={handleSearch} >Search</button>
            </div>
            
        </div>
            </>
        }
        
    
        </div>
    </div>
  )
}

export default Header