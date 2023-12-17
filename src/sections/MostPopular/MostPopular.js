import './MostPopular.css'
import popular_01 from '../../assets/images/popular-01.jpg'

const MostPopular = () => {
  return (
    <>
    <div className='section-wrapper'>
      <div className='section-header'>
        <h4>MOst Popular</h4>
      </div>
       <div className='most-popular-items'>
         <div className='most-popular-item'>
            <div className='card-wrapper'>
               <img src={popular_01} />
            </div>

         </div>
       </div>
    </div>
    </>
  )
}

export default MostPopular