import style from './style';

const BackLocation = ({ location, handlerOnClick }) => (
  <div className={style['back-location']}>
    <img src="/assets/arrows/bottom.svg" onClick={() => handlerOnClick(location.name)}/>
  </div>
);

export default BackLocation;