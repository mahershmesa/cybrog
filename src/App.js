import './App.css'
import { Container } from './components/index'
//import { GamingLibrary } from './sections/GamingLibrary/GamingLibrary'
import { Header,Footer,Hero,MostPopular,GamingLibrary } from './sections/index'

const App = ()=> {
    return (
        <>
          <Header/>
          <Container> 
            <Hero/>
            <MostPopular/>
            <GamingLibrary/>
          </Container>
         {/* <Footer/> */}    
        </>
        
    )
}

export default App