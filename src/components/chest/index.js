import style from './style';
import Inventory from '../inventory';
import TaskList from '../task-list';
import TaskDescription from '../task-description';

const Chest = ({ open, inventory, tasks, displayTask, handlerOpenChest, handlerCloseChest, handlerDisplayTask }) => (
  <div className={style.chest}>
		<button type="button" className={style['chest--target']} onClick={handlerOpenChest}>
      <img src="/assets/anothers/treasure.svg" alt="Открыть сундук" title="Открыть сундук" />
    </button>
    {open && <div className={style['chest--modal']}>
      <div className={style['chest--content']}>
        <div className={style['chest--title']}>Инвентарь</div>
        <Inventory inventory={inventory} />
      </div>
      <div className={style['chest--content']}>
        <div className={style['chest--title']}>Список заданий</div>
        <TaskList tasks={tasks} handlerClick={handlerDisplayTask}/>
      </div>
			{displayTask && <div className={style['chest--content']}>
        <div className={style['chest--title']}>{displayTask.title}</div>
        <TaskDescription {...displayTask} />
      </div>}
      <button type="button" className={style['chest--close']} onClick={handlerCloseChest}>
        <img src="/assets/anothers/close.svg" alt="Закрыть сундук" title="Закрыть сундук" />
      </button>
    </div>}
		<div className={style['сhest--bg']} />
	</div>
);

export default Chest;