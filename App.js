import React,{useState, useEffect} from 'react';
import './App.css';
import Element from './Child';
import store from './Redux/store';

function App()
{  
  const [color, setColor] = useState("blue")
  
  useEffect(()=>{
    const subscribe = store.subscribe(()=>{
      console.log("Store state changes", store.getState());
      let new_store = store.getState();
      setColor(new_store.color);
    })
  },[])

  return(
    <>
    <div className={`${color}`}>
      <p>cev</p>
      <Element />
    </div>
    </>
  )
}

export default App;