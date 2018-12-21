import style from './style';

const Character = ({ name, available, className }) => (
  <div className={`${style.character} ${style.character}--how-${name} ${className}`}>
    <img src={`/assets/characters/${name}.png`} alt={name} />
  </div>
);

export default Character;