import React from 'react'
import {FaStar , FaDownload} from 'react-icons/fa'
import {BsFillBrightnessHighFill} from 'react-icons/bs'



const card = (props) => {
  return (
    <div className='most-popular-item'>
            <div className='card-wrapper'>
               <img className='most-popular-item-image' src={props.image} />
               <div className='most-popular-item-content'>
                <h4 className='most-popular-item-title'>
                    {props.title}<br />
                    <span>{props.category}</span>
                    </h4> 
                    <ul>
                        <li><span style={{"color":"var(--color-icons)"}}><BsFillBrightnessHighFill/></span> <span>{props.rate}</span></li>
                        <li><span style={{"color":"var(--color-primary)"}}><FaDownload/></span> <span>{props.download }</span></li>
                    </ul>
               </div>
            </div>

         </div>
  )
}

export default card