import "./Nav.css";
import Search from "../search/Search";
function Nav() {
  return (
    <div className="Nav">
        <h1>Food Factory</h1>
            <p><Search /></p>
        <div id = "item">
        <a href="">Home</a>
        <a href="">About us </a>
        <a href = "">Braverage </a>
        <a href="">Contact</a>
        </div>
      
    </div>
  );
}

export default Nav;
