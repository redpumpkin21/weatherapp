import React from 'react'

const Display = ({weather}) => {
    let currentTemp = weather.main?.temp;
        if(currentTemp> 90){
            currentTemp =<h1 style = {{ color:'red'}}>{currentTemp}</h1>
        }else if( currentTemp < 40){
            currentTemp =<h1 style ={{ color:'blue'}}>{currentTemp}</h1>
    }else{
        currentTemp = <h1>{currentTemp}</h1>
    }
      

        
    
     const loaded = () => {
    return(
        <>
        <div>{weather.name}</div>
        <h1>{currentTemp}</h1>
        {/* <h1 > {weather.main?.temp}</h1>  */}
        
        <h3>{weather.weather[0].description}</h3>
        
        <div className ='min-max' >
            <div className = 'temps' id = 'min'>
                <small>min</small>
                <h2>
                    {weather.main?.temp_min}
                </h2>
             </div>
             <div className = 'temps' id= 'max'>
                    <small>max</small>
                    <h2>
                    {weather.main?.temp_max}
                    </h2>
             </div>
        </div>
        </>
        
    )}
    console.log(loaded)
    const loading = () => {
        return <h1>Put in your Zip code to learn more</h1>
    }
        return weather.weather ? loaded() : loading()
 }
export default Display