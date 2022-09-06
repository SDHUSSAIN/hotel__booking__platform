import React from 'react'
import "./searchItemList.css"

const SearchItemList = () => {
  return (
    <div className="SearchItemList">
        <div className="search__item">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/361815524.webp?k=2f6081d830362bde2ca2a7256fb411d86db512a620a47116e9064114314f7fb4&o=&s=1" alt="" className="search__item__img" />
            <div className="search__item__desc">
                <h1 className="search__item__title">Shahpura House</h1>
                <span className="search__item__distance">3.1 km from centre</span>
                <span className="search__item__taxiop">Taxi Available</span>
                <sapn className="search__item__subtitle">Nearby Bani Park, Jaipur</sapn>
                <span className="search__item__features">Deluxe Double Room . 1 double bed . Breakfast included </span>
                <span className="search__item__cancelop">FREE Cancellation . No prepayment needed </span>
                <span className="search__item__cancelopsubtitle">You can cancel later, so lock in this great price today.</span>
            </div>
            <div className="search__item__details">
                <div className="search__item__rating">
                    <span>Excellent</span>
                    <button>9.2</button>
                </div>
                <div className="search__item__price">
                    <span className='item__price__tag'>Rs. 12300</span>
                    <span className='item__tax__option'>Includes taxes and other charges</span>
                    <button className='item__avl__btn'>See Availabilty</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchItemList