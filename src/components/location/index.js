import ImageMapper from 'react-image-mapper';
import style from './style';
import Character from '../character';
import NextLocations from '../next-location';


const Location = ({ name, characters, nextLocations, handlerChangeLocation, handlerClickCharacter }) => (
	<div className={`${style.location} ${style[`location--type-${name}`]}`}>
		<img src={`/assets/locations/${name}.jpg`} alt={name} />
		
		{characters.map(character => (<Character {...character} className={style[character.name]}
			handlerClick={handlerClickCharacter}
		                              />))}
		                              
		{nextLocations && <svg className={style['location--mask']}>
			{nextLocations.map(location => (<NextLocations {...location} className={style[location.name]}
																						 handlerOnClick={handlerChangeLocation}
			/>))}
		</svg>}
	</div>
);

export default Location;