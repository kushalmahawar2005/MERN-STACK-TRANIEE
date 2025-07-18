import './Item.css'
export default function Groceries ({src , dish}) {
return (
    <>    

    <div className="card">
        <button className="Item">
            <img src = {`${src}`} alt = "dish" ></img>
        </button>
        <p>{dish}</p>
    </div>
    </>

);
}