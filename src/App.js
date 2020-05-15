import React,{useState} from 'react';
import './App.css';
const App = () => {
  const [toggle, setToggle] = useState(false);
  const ChangeColor=()=>{
    setToggle(!toggle)
  }
  return (
    <div className="color-wrapper">
      <div 
        className='tuq-display' 
        onClick={ChangeColor} 
        style={{width: toggle?"60%":"40%", 
                transition: "all .5s",
                fontSize: toggle?"5vh":"",
                }}>
          TURQUOISE!
        </div>
      <div 
        className='pink-display' 
        onClick={ChangeColor} 
        style={{width: toggle?"40%":"60%", 
        transition: "all 0.5s",
        fontSize: toggle?"":"5vh",}}>
          Ivory!
      </div>
    </div>
  );
}

export default App;
