import style from './style';

const NextLocation = ({ name, available, coords, handlerOnClick }) => (
	<polygon points={coords.desktop} className={style['next-location']} onClick={() => handlerOnClick(name)}>
		<title>{name}</title>
	</polygon>
);

export default NextLocation;