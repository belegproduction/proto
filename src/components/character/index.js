import style from './style';

const Character = ({ name, available, className, handlerClick }) => (
	<div className={`${style.character} ${style.character}--how-${name} ${className}`} onClick={() => handlerClick(name)}>
		<img src={`/assets/characters/${name.toLowerCase()}.png`} alt={name} />
	</div>
);

export default Character;