import { useState } from 'react';
import Inputs2 from './components/modules/inputs';
import MoreInfos from './components/modules/MoreInfos';
import Input_2 from './Assets/svg/geo-alt-fill.svg';

import './components/Styles/App.css';

function App() {
  
  let [grauses, setGrauses] = useState(null)
  let [wind, setWind] = useState(null);
  let [umidade, setUmidade] = useState(null);
  let [tempo, setTempo] = useState(null);
  let [nome, setNome] = useState(null)
  let [desciption, setDescription] = useState(null)
  
  return (
    <div className="App">
      <div className="Container">
        <Inputs2 Setgrauses={setGrauses} setUmidade={setUmidade} setWind={setWind} setTempo={setTempo} setNome={setNome} setDescription={setDescription} />
      <h1 className='title_city'>
        <img src={Input_2} alt="" />
        {nome}
      </h1>
          <div className="Container_infos">
          <MoreInfos umidade={umidade} vento={wind} tempo={tempo} celscius={grauses} description={desciption} />
        </div>
      </div>
    </div>
  );
}

export default App;
