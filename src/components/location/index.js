import style from './style';
import Character from '../character';
import Arrow from '../arrow';

const Location = ({ name, characters, nextLocations, handlerChangeLocation }) => (
  <div className={`${style.location} ${style[`location--type-${name}`]}`}>
    <img src={`/assets/locations/${name}.jpg`} alt="location"/>
    {characters.map(character => <Character {...character} className={style[character.name]}/>)}
    {nextLocations.map(location => <Arrow {...location} className={style[location.name]} handlerOnClick={handlerChangeLocation}/>)}
  </div>
);

export default Location;