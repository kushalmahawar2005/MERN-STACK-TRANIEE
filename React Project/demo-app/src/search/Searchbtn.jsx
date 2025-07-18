import './Search.css' ;

export default function Searchbtn() {
    return (
        <div className='Searchbtn'>
        <img src="https://imgs.search.brave.com/xR-eo65unm-1G00ycWpwRAFSmsPuXgnHo6Xnh5_rZdY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iYW5u/ZXIyLmNsZWFucG5n/LmNvbS8yMDE4MDMy/OS95Z3cvYXZpeGlt/dXFxLndlYnA" alt="location" className='location'/>
        <input type="text" placeholder = "Enter your Delivery location" id = "Search-btn"></input>
        
        
        <input type="text" placeholder = "Search for restaurant, item or more" id = "Searchres" ></input>
        <img src = "/public/assests/lens.png"alt = "lens" className='lens'></img>
        </div>
    );
}


