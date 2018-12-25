import style from './style';

const TaskList = ({ tasks, handlerClick }) => (
  <div className={style['task-list']}>
    {Array.isArray(tasks) && tasks.length ? tasks.map((task, idx) => (
      <div className={style['task-list--item']} onClick={() => handlerClick(task)}>
        <div className={style['task-list--index']}>{ idx + 1 }</div>
        <div className={style['task-list--name']}>{ task.title }</div>
        <div className={style['task-list--status']}>{ task.status }</div>
      </div>
    )) : <div className={style['task-list--empty']}>
      Нету пока заданий
    </div>}
  </div>
);

export default TaskList;