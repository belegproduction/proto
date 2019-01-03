import style from './style';

const Conversation = ({ character, dialog, handlerNextDialog, handlerCloseDialog, checkConditions }) => (
	<div>
		<div className={style.conversation}>
			<div className={style['conversation--content']}>
				<div className={style['conversation--text']}>
					<span>{character.name} {dialog.context ? `(${dialog.context})` : ''}:</span> {dialog.text}
				</div>
				<ul className={style['conversation--answers']}>
					{Array.isArray(dialog.answers) && dialog.answers
						.filter(checkConditions)
						.map((answer, index) => (
							<li className={style['conversation--answer']}>
								<div className={style['conversation--index-answer']}>
									{index + 1}
								</div>
								<div className={`${style['conversation--text-answer']} ${answer.forceDisplay ? style['conversation--text-answer-disabled'] : ''}`} onClick={() => handlerNextDialog(answer)}>
									{answer.text} {answer.forceDisplay && answer.forceDisplayMessage ? <span>{`(${answer.forceDisplayMessage})`}</span> : ''}
								</div>
							</li>))}
						{dialog.close && <li className={style['conversation--answer']}>
							<div className={style['conversation--index-answer']}>
								-
							</div>
							<div className={style['conversation--text-answer']} onClick={handlerCloseDialog}>
								(Покинуть диалог)
							</div>
						</li>}
				</ul>
			</div>
			<div className={style['conversation--avatar']}>
				<img src={`/assets/characters/avatar-${character.name.toLowerCase()}.png`} alt={name} />
				<div className={style['conversation--name']}>{character.name}</div>
			</div>
		</div>
		<div className={style['conversation--bg']} />
	</div>
);

export default Conversation;