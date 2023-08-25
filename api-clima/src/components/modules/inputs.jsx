import { useState } from 'react';
import { Key } from '../config/config';
import Icon_1 from '../../Assets/svg/search.svg';
import Styles from '../Styles/inputs.module.css';

import '../Styles/App.css';


function Inputs2({ Setgrauses, setWind, setUmidade, setTempo, setNome, setDescription}) {

  const [city, setCity] = useState(null)
  

  async function clima(){
    const URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${Key}`)
    const res = await URL.json()
    return res
  }

  async function cidade() {
    const climax = await clima()
    console.log(climax)

    Setgrauses(parseInt(climax.main.temp).toFixed(1))
    setWind(climax.wind.speed);
    setUmidade(climax.main.humidity)
    setTempo(climax.weather[0].icon)
    setNome(climax.name);
    setDescription(climax.weather[0].description)
  }

  return (
    <div className={Styles.container}>
      <input 
        type="text" 
        name="" id="" 
        className={Styles.input} 
        placeholder="Digite o nome de uma cidade..."
        onChange={(e) => setCity(e.target.value)}
      />
      <button className={Styles.button} onClick={cidade}>
        <img src={Icon_1} alt="" />
      </button>
    </div>
  )
}

export default Inputs2;
