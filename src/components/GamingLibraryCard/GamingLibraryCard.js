import './GamingLibraryCard.css'

const GamingLibraryCard = (props) => {
  return (
    <div className='gaming-library-card'>
        <li><img src={props.image} alt="" /></li>
        <li><h4>{props.title}<span>{props.category}</span></h4></li>
        <li><h4>Data Added</h4><span>{props.data_added}</span></li>
        <li><h4>Hours played</h4><span>{props.hours_played}</span></li>
    </div>
  )
}

export default GamingLibraryCard