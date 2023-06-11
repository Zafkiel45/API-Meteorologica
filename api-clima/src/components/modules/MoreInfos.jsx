import MoreInfosStyle from '../Styles/moreInfos.module.css';
import Input_3 from '../../Assets/svg/wind.svg';
import Input_4 from '../../Assets/svg/droplet-fill.svg';


function MoreInfos({tempo,umidade,vento, celscius, description}) {

  let link = `https://openweathermap.org/img/wn/${tempo}.png`

  return (
    <div className={MoreInfosStyle.container}>
      <div className={MoreInfosStyle.container_2}>
        <div className={MoreInfosStyle.container_graus}>
            <span className={MoreInfosStyle.graus}>
            {celscius}°C
            </span>
        </div>
        <div className={MoreInfosStyle.duble_infos}>
            <div className={MoreInfosStyle.item_info}>
              <button className={MoreInfosStyle.button}></button>
                {vento}Km/h
              <img src={Input_3} alt="" />
            </div>
            <div className={MoreInfosStyle.item_info2}>
              <button className={MoreInfosStyle.button}></button>
                {umidade}%
              <img src={Input_4} alt="" />
            </div>
        </div>
        <div className={MoreInfosStyle.container_tempe}>
            <button className={MoreInfosStyle.button}></button>
            {description}
            <img src={link} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MoreInfos;