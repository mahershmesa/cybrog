import './MostPopular.css'
import { Card } from '../../components/index'
import popular_01 from '../../assets/images/popular-01.jpg'

import popular_02 from '../../assets/images/popular-02.jpg'
import popular_03 from '../../assets/images/popular-03.jpg'
import popular_04 from '../../assets/images/popular-04.jpg'


 
const MostPopular = () => {
  return (
    <>
    <div className='section-wrapper'>
      <div className='section-header'>
        <h4>MOst Popular</h4>
      </div>
       <div className='most-popular-items'>
        
        <Card image={popular_01} title="fortnite" category="sandbox" rate="3.8" download="2.3M" />
        <Card image={popular_02} title="pubg" category="stream-x" rate="4.8" download="1.1M"/>
        <Card image={popular_03} title="dota2" category="legendary" rate="2.7" download="5.3M"/>
        <Card image={popular_04} title="cs-go" category="Battle 5" rate="3.9" download="6.1M" />
        <Card image={popular_01} title="fortnite" category="sandbox" rate="3.8" download="2.3M" />
        <Card image={popular_02} title="pubg" category="stream-x" rate="4.8" download="1.1M"/>
        <Card image={popular_03} title="dota2" category="legendary" rate="2.7" download="5.3M"/>
        <Card image={popular_04} title="cs-go" category="Battle 5" rate="3.9" download="6.1M" />


        
       </div>
    </div>
    </>
  )
}

export default MostPopular