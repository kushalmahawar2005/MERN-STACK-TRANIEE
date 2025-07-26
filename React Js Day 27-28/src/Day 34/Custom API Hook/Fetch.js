console.log("Fetting the Api Key");

import React from 'react';

function useFetch(url) {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);


React.useEffect(() => {
    fetch(url) 
    .then((responce) => responce.json())
    .then((data) => {
        setData(data);
        setLoading(false);
    });
},[url]);

return {data, loading};
}

export default function Fetch() {
    const {data, loading} = useFetch('https://catfact.ninja/fact');



return (
    <div style = {{ padding : "16p"}}>
        <h2>Data Fetch with Custom Hook</h2>
        {loading ? <p>Loading .... </p> : <p>Fact About Cat : {JSON.stringify(data.fact)} </p>  }
        {console.log(data)}
        </div>




);

}