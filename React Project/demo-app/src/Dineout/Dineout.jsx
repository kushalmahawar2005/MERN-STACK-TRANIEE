import './Dineout.css'
export default function Dineout({ src, title, idx }) {
    let description = [
        ["Continental • North Indian", "Raja Park, Jaipur"],
        ["North Indian • Bar Food", "Lal Kothi, Jaipur"],
        ["Healthy Food • Italian", "Lal Kothi, Jaipur"],
        ["North Indian • South Indian", "Ajmer Road, Jaipur"],
        ["Italian • North Indian", "MGF Metropolitan Mall, Bais Godam, Jaipur"],
        ["Finger Food • North Indian", "Nirwana Hometel, Bani Park, Jaipur"],
    ];

    let price = ["₹1500 for two","₹1000 for two","₹1000 for two","₹2600 for two","₹1500 for two" , "₹1500 for two"];
    let range = ["2 km", "3 km" , "2.8 km", "2.5 km", "1.7 km", "2.1 km"];

    return (
        <div className="container">
            <div className="image-container">
                <img src={src} alt="img" />
                <div className="image-title">{title}</div>
            </div>
            <div className='data1'>
            <ul className="data" id="data1">
                <li>{description[idx][0]}</li>
                <li>{description[idx][1]}</li>
            </ul>
            <ul className="data" id="data2">
                <li>{price[idx]}</li>
                <li>{range[idx]}</li>
            </ul>
            </div>
            <button className="Table">
                <p>Table Booking</p>
                
            </button>
            <div className='offer'>
                <img src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png" alt = "img"></img>
            <h3 className = "h3">Flat 15% off on pre-booking</h3>
            <p className = "h3">+2 more</p>
            </div>
            <h4>Up to 10% off with bank offers</h4>
        </div>
    );
}
