import React from 'react'
import './stylesheets/card2.css'
const Card2 = () => {
  return (
    <div className='card2'>
      <div className="orderDetails">
        <div className="details">
            <span className='subHeading2'>90%</span>
            <span className='subHeading'>of all orders are produced locally</span>
        </div>
        <div className="details">
            <span className='subHeading2'>90%</span>
            <span className='subHeading'>of orders arrive within 5 days of ordering</span>
        </div>
        <div className="details">
            <span className='subHeading2'>140+</span>
            <span className='subHeading'>print providers across 32 countries</span>
        </div>
      </div>
    </div>
  )
}

export default Card2
