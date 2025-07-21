import React from "react";
import ReactDOM from "react-dom/client";



const element = React.createElement("h1",{id:"first",className:"fist",style:{backgroundColor:"red" , color:"white"}},"HELLO Coder Army");

const reactroot = ReactDOM.createRoot(document.getElementById('root'));
reactroot.render(element);