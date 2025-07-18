import './Cities.css';
import Cities from './Cities'; 

const cityList = [
    'Order food online in Bangalore',
    'Order food online in Mumbai',
    'Order food online in Gurgaon',
    'Order food online in Pune',
    'Order food online in Hyderabad',
    'Order food online in Kolkata',
    'Order food online in Chennai',
    'Order food online in Ahmedabad',
    'Order food online in Chandigarh',
    'Order food online in Jaipur',
    'Order food online in Chennai',
    'Order food online in Chandigarh',
];

export default function Citiescon() {
    return (
        <div className="cities-wrapper">
           
            <div className="cities-container">
                {cityList.map((city, index) => (
                    <Cities key={index} data={city} />

                ))}
            </div>
        </div>
    );
}
