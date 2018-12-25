import style from './style';

const TaskDescription = ({ description, tips }) => (
  <div className={style['task-description']}>
    { description }
    <hr className={style['task-description--hr']}/>
    {Array.isArray(tips) && tips.map((tip) => (
      <div className={style['task-description--tip']}>
        { tip }
        <hr className={style['task-description--hr']}/>
      </div>
    ))}
	</div>
);

export default TaskDescription;