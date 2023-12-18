import './MostPopular.css'
import { Card } from '../../components/index'


const MostPopular = () => {
  return (
    <>
    <div className='section-wrapper'>
      <div className='section-header'>
        <h4>MOst Popular</h4>
      </div>
       <div className='most-popular-items'>
        
        <Card title="fortnite" category="sandbox" rate="3.8" download="2.3M" />
        <Card title="pubg" category="stream-x" rate="4.8" download="1.1M"/>
        <Card title="dota2" category="legendary" rate="2.7" download="5.3M"/>
        <Card title="cs-go" category="Battle 5" rate="3.9" download="6.1M" />


        
       </div>
    </div>
    </>
  )
}

export default MostPopular