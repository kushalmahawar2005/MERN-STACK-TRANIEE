import './Cities.css';

export default function Cities({ data }) {
    return (
        <div className="city-card">
            <p>{data}</p>
        </div>
    );
}
