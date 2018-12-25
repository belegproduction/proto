import style from './style';

const Conversation = ({ character, dialog, handlerNextDialog, handlerCloseDialog, checkConditions }) => (
	<div>
		<div className={style.conversation}>
			<div className={style['conversation--content']}>
				<div className={style['conversation--text']}>{dialog.text}</div>
				<ul className={style['conversation--answers']}>
					{Array.isArray(dialog.answers) && dialog.answers
						.filter(checkConditions)
						.map(answer => (<li onClick={() => handlerNextDialog(answer)}>
							{answer.text}
						</li>))}
				</ul>
			</div>
			<div className={style['conversation--avatar']}>
				<img src={`/assets/characters/avatar-${character.name.toLowerCase()}.png`} alt={name} />
				<div className={style['conversation--name']}>{character.name}</div>
			</div>
			<hr className={style['conversation--hr']} />
			<div className={style['conversation--panel']}>
				<button type="button" className={dialog.close ? '' : style['conversation--button-disabled']}
					onClick={handlerCloseDialog}
				>
					<img src="/assets/conversation/forward.svg" alt="Покинуть диалог" title="Покинуть диалог" />
				</button>
			</div>
		</div>
		<div className={style['conversation--bg']} />
	</div>
);

export default Conversation;