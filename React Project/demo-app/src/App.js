import './App.css';
import Nav from './nav/Nav'
import Element from './elements/Element'
import Searchbtn from './search/Searchbtn.jsx'
import About from './about/About.jsx'
import Itemcon from './Item/Itemcon.jsx'
import GroceriesCon from './Item/GroceriesCon.jsx'
import Dineoutcon from './Dineout/Dineoutcon.jsx';
import Qr from './Or/Qr.jsx';
import Citiescon from './cities/Citiescon.jsx'

function App() {
  return (
   <>
   <div className='hero'>
   <Nav/>
   <Element />
    <Searchbtn />
    <About />
    </div>
    <h1 className='Braverage'>Braverage</h1>
    <div className='food'>
    <Itemcon />
    </div>
    <h1 className='Braverage'>Shop groceries on Instamart</h1>
    <GroceriesCon />
    <h1 className='Braverage'>Discover best restaurants on Dineout</h1>
    <Dineoutcon />
    <Qr />
    <h1 className='Braverage'>Cities with food delivery</h1>
    <Citiescon />
   </>

   
  );
}

export default App;
