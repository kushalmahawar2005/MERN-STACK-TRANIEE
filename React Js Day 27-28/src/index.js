import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// const element = React.createElement('h1', {}, 'hello from withour jsx');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<h1 className='true'><App/></h1>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// We use this 3 tags for use multiple tags in render file 
//Like h1 , h1 , p , and anymore
//React Fragement
//Div
// <> </>

// <h1 className='Ex'>This is my Second Day of React Js</h1>
{/* <h2 contentEditable = "true" className='true'>React</h2>  */}