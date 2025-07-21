import React from "react";
import ReactDOM from "react-dom/client";

function Card(props){
    return (
        <div style={{border:"2px solid black",padding: "2px", cursor:"pointer",backgroundColor:"grey"}}>
              <img src="https://cutestuff.co.in/cdn/shop/products/bloomwildbackprintedwomenoversizedtshirt_1080x.png?v=1680510766" height="200px" width="200px" ></img>
              <div style={{textAlign:"center"}} >
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h3>Shop Now</h3>
              </div>
        </div>
    )
}

const arr =
[   {id:"1",cloth:"jeans",offer:"30-80% OFF "} ,
    {id:"2",cloth:"shirt",offer:"30-99% OFF "} ,
    {id:"3",cloth:"bags",offer:"30-40% OFF "} ,
    {id:"4",cloth:"shoes",offer:"50-80% OFF "} ,
    {id:"5",cloth:"chair",offer:"10-20% OFF "} ,
    {id:"6",cloth:"table",offer:"20-80% OFF "}
]

function Header(){
    return (
        <div className="heading">
            <div className="logo">
                     <img className = "image" src="https://images.indianexpress.com/2021/01/myntra.png" height="60px" width="100px"></img>
            </div>

            <div className="options">
                    <button className="but">MEN</button>
                    <button className="but">WOMEN</button>
                    <button className="but">KIDS</button>
                    <button className="but">HOME</button>
                    <button className="but">BEAUTY</button>
                    <button className="but">GENZ</button>
                    <button className="but">STUDIO</button>
            </div>

            <input className="inp" placeholder="Search for products,brands and more"></input>

            <div className="profile">
                    <button className="prof">PROFILE</button>
                    <button className="prof">WISHLIST</button>
                    <button className="prof">BAG</button>
            </div> 
        </div>
    )
}

function Footer(){
    return(
        <div className="foot">
              <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg" width="1500px" height="350px"></img>
        </div>
    )
}

function App() {

    return (
        <>
        {/* "Header" */}
        <Header/>

        {/* "Body" */}
         <div className="middle" style={{display:"flex" , gap:"25px" , flexWrap:"wrap"}}>
              {
                arr.map((value,index)=><Card key={value.id} cloth = {value.cloth} offer = {value.offer}/>)
              }
{/* note: arr.map returns-> [<Card/>,<Card/>,<Card/>,<Card]...etc*/}
         </div>

         {/* "Footer" */}
           <Footer/>
         </>

    )
}




const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App />);
