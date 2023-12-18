import React from 'react'

import popular_01 from '../../assets/images/popular-01.jpg'


const card = (props) => {
  return (
    <div className='most-popular-item'>
            <div className='card-wrapper'>
               <img className='most-popular-item-image' src={popular_01} />
               <div className='most-popular-item-content'>
                <h4 className='most-popular-item-title'>
                    {props.title}<br />
                    <span>{props.category}</span>
                    </h4> 
                    <ul>
                        <li><span>{props.rate}</span></li>
                        <li><span>{props.download }</span></li>
                    </ul>
               </div>
            </div>

         </div>
  )
}

export default card