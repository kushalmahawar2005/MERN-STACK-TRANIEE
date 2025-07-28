// import logo from './logo.svg';
import './App.css';
// import Kushal from './kushal';
// import Update from './Day 30/UseEffect'
// import UseContext from './Day 30/UseContext'; 
// import UseRef from './Day 31/UseRef';
// import Fetch from "./Day 34/Custom API Hook/Fetch";
// import K from "./Day 36/Kushal";
// import Dev from "./Day 36/Dev";
// import { Anish } from "./Day 36/Anish";
// import { Akshat } from "./Day 36/Akshat";
function App() {
  let arr = [1, 2, 3, 5, 7, 8, 9];

  return (
    <ul>
      {
        arr.map((element, index) => (
          <li key={index}>{element}</li>
        ))
      }
    </ul>
  );
}

export default App;