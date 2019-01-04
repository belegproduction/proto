import style from './style';

const Arrow = ({ name, available, type, className, handlerOnClick }) => (
  <div className={`${style.arrow} ${className}`}>
		<img src={`/assets/arrows/${type}.svg`} alt="arrow" onClick={() => handlerOnClick(name)} />
	</div>
);

export default Arrow;