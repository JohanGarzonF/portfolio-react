import './App.css'
import HomeScreen from './components/Home/HomeScreen'
import AboutMeScreen from './components/Info/AboutMeScreen'
import ContactScreen from './components/Info/ContactScreen'
import PortfolioScreen from './components/Info/PortfolioScreen'
import TecnologiesScreen from './components/Info/TecnologiesScreen'
import FooterScreen from './components/Shared/FooterScreen'
import Header from './components/Shared/Header'

function App() {

  return (
    <div className="App">
      <Header/>
      <HomeScreen/>
      <AboutMeScreen/>
      <TecnologiesScreen/>
      <PortfolioScreen/>
      <ContactScreen/>
      <FooterScreen/>
    </div>
  )
}

export default App
