const element = React.createElement("h1",{id:"first",className:"fist",style:{backgroundColor:"red" , color:"white"}},"HELLO");

const reactroot = ReactDOM.createRoot(document.getElementById('root'));
reactroot.render(element);

