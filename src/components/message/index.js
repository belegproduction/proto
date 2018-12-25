import style from './style';

const Message = ({ message }) => (
  <div>
    <div className={style.message}>
      {/*<img src={`/assets/message/${slug.toLowerCase()}.png`} alt={name} />*/}
      <div className={style['message--text']}>{message}</div>
      <button onClick={() => location.reload()} className={style['message--out']} type="button">
        <img  src="/assets/conversation/forward.svg" />
      </button>
    </div>
    <div className={style['message--bg']}></div>
	</div>
);

export default Message;