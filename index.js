// // var React = require('react');
// import React from 'react';
// // var ReactDOM= require('react-dom');
// import ReactDOM from 'react-dom';

// ReactDOM.render(<h1>Abhay Patel !</h1> , document.getElementById('root'));
// Kya Dikhana h , lha dikhana h 

// let h1=document.createElement('h1');
// h1.innerHTML="Abhay Patel Sir";
// document.getElementById('root').appendChild(h1);


// let h5=document.createElement('h5');
// h5.innerHTML="please leave me alone i want to live alone for some time ";
// document.getElementById('root').appendChild(h5);

// ReactDOM.render(
// /* <div>
//   <h1>Abhay Patel !</h1> 
//   <p> leave me alone </p> 
//   <h2>please do it for me !</h2>
// </div>,  */

//   [
//     <h1>Abhay Patel !</h1> ,
//     <p> leave me alone </p>,   
//     <h2>please do it for me !</h2>
//   ], document.getElementById('root'));



// ReactDOM.render(


//   <React.Fragment>
//     <h1>Abhay Patel !</h1> 
//     <p> leave me alone </p>   
//     <h2>please do it for me !</h2>
//   </React.Fragment>,
//    document.getElementById('root'));


// ReactDOM.render(


//   <>
//     <h1>Abhay Patel !</h1> 
//     <p> leave me alone </p>   
//     <h2>please do it for me !</h2>
//   </>,
//    document.getElementById('root'));



// let h1=document.createElement('h1');
// h1.innerHTML="Abhay Patel Netflix Pick";
// document.getElementById('root').appendChild(h1);

// let p=document.createElement('p');
// p.innerHTML="List of 5 best Series."
// document.getElementById('root').appendChild(p);


// ReactDOM.render(
//   <>
//   <h1>Abhay Patel Netflix Pick</h1>
//   <p>List of 5 Best Series</p>
//     <ul>
//       <ol>1. Dark</ol>
//       <ol>2. Extra curricular</ol>
//       <ol>3. My Holo Love</ol>
//       <ol>4. My first-2 Love</ol>
//       <ol>5. Mr Robot</ol>
//     </ul>
//   </>,document.getElementById('root')
// )

// import React from "react";
// import ReactDOM  from "react-dom";

// const fname = "Abhay ";
// const lname ="Patel";

// ReactDOM.render(
//   <>
//     <h1>{`My Name Is ${fname} ${lname} `}</h1>
//     <p>My lucky number is {5*5}</p>
//   </>,document.getElementById('root'));










// import React from "react";
// import ReactDOM  from "react-dom";

// let name="Abhay Patel";
// let currDate=new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//     <h1>{`Hello , My Name Is ${name}`} </h1>
//     <p>{`Todays Date is ${currDate}`}</p>
//     <p>{`Current Time ${currTime}`}</p>n
//   </>,
//   document.getElementById('root'));



// Video 14


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const name="Abhay Patel";

// const img1 ="https://picsum.photos/200/300";
// const img2 ="https://picsum.photos/250/300";
// const img3 ="https://picsum.photos/270/300";
// const links='https://github.com/';


// .heading{
//   color: #14ebeb;
//   text-align: center;
//   text-transform: capitalize;
//   font-weight: bold;
//   text-shadow:0px 2px 4px   #868d8d;
//   margin: 70px 0px;
//   font-family: 'Splash', cursive;
// }

// const heading = {
//   color :'#14ebeb',
//   textTransfrom:'capitalize',
//   textAlign :'center',
//   textShadow:'0px 2px 4px   #868d8d',
//   margin: '70px 0px',
//   fontFamily: "'Splash', cursive"

// }

// ReactDOM.render(
//   <>
//     <h1  style={heading}>{`Hello , My Name Is ${name}`}</h1>
//     <div className='img_div'>
//       <img src={img1} alt="random Images" />
//       <img src={img2} alt="random Images" />
//       <a href={links} target="_blank">
//         <img src={img3} alt="random Images" />
//       </a>
//     </div>
//   </>,
//   document.getElementById('root')
// );



import React from "react";
import ReactDOM from 'react-dom';
import './index.css';

// let currDate = new Date();
// currDate = currDate.getHours();
let currDate = 14;
let greeting = "";

const cssStyle = {};

if (currDate >= 1 && currDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = 'green';
}
else if (currDate >= 12 && currDate < 19) {
  greeting = "Good Evening";
  cssStyle.color = 'orange';
}
else {
  greeting = "Good Night";
  cssStyle.color = 'black';
}

ReactDOM.render(
  <>
    <div>
      <h1>Hello Sir,<span style={cssStyle}> {greeting}</span></h1>
     </div>
  </>, document.getElementById('root')
);