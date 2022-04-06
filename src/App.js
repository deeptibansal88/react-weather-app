import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import  Icon from"./assets/icon.jpg"
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  
  const apiKey="d30b8f92be22e4c99193c24453b2ba7b"
  const[data,setData ]= useState({});
  const[inputCity,setInputCity]=useState("");

  const getWeatherDetails = (cityName)=>{
    if(!cityName)return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid=" + apiKey 
    axios.get(apiURL).then((res)=>{
      console.log("response" , res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log("err",err)
    })

   }
  
   const handleOnChange = (e) => {
     console.log("value",e.target.value)
     setInputCity(e.target.value)
   }

   useEffect(()=>{
    getWeatherDetails("delhi")

  },[])

  const handleChangeInput = (e) => {
     setInputCity(e.target.value)
  }

  const handleSearch = () => {
     getWeatherDetails(inputCity)
  }

  return (
    <div className="col-md-12">
     <div className='weatherBg'>
       <h1 className='heading'>Weather App</h1>
       <div className='d-grid gap-3 col-4 mt-4'>
       <input type = "text" className='form-control' onChange={handleChangeInput}/>
       <button className='btn btn-primary ' type = 'button' onClick={handleSearch}>Search</button>
       </div>
    </div>
    <div className='col-md-12 text-center mt-5'>
            <div className='shadow rounded weatherResultBox'>
            <img src= {Icon} className="weatherIcon"/>
            <h5 className='weatherCity'>{data?.name}</h5>
            <h6 className='weatherTemp'>{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>

            </div>

    </div>
    </div>
  );
}

export default App;
