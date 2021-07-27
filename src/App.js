import React, {useState} from 'react'
import './App.css';
import Display from './componets/weatherDisplay'
import Form from './componets/weatherForm'

function App() {

  const[weather, setWeather] = useState({})
    const getWeather = async(zipCode) => {
      let apiKey = '11786cf53362e428a0695f06c5ece387'
      console.count()
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`)
      console.count()
      const data = await response.json()
      setWeather(data)
      console.log(data)
}


  return (
    <div className="App">
     <Form weatherSearch ={getWeather}/>
     <Display weather = {weather}/>
    </div>
  );
}
//}
export default App;
