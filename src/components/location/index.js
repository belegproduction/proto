import style from './style';
import Character from '../character';
import Arrow from '../arrow';


const Location = ({ name, characters, nextLocations, handlerChangeLocation, handlerClickCharacter }) => (
	<div className={`${style.location} ${style[`location--type-${name}`]}`}>
		<img src={`/assets/locations/${name}.jpg`} alt={name} />
		
		{characters.map(character => (<Character {...character} className={style[character.name]}
			handlerClick={handlerClickCharacter}
		                              />))}
    
    {Array.isArray(nextLocations) && nextLocations.map(location => (
    	<Arrow {...location}
				className={style[location.name]}
				handlerOnClick={handlerChangeLocation}
			/>))}
	</div>
);

export default Location;