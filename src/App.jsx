import './App.css'
import HomeScreen from './components/Home/HomeScreen'
import AboutMeScreen from './components/Info/AboutMeScreen'
import PortfolioScreen from './components/Info/PortfolioScreen'
import TecnologiesScreen from './components/Info/TecnologiesScreen'
import Header from './components/Shared/Header'

function App() {

  return (
    <div className="App">
      <Header/>
      <HomeScreen/>
      <AboutMeScreen/>
      <TecnologiesScreen/>
      <PortfolioScreen/>
    </div>
  )
}

export default App
