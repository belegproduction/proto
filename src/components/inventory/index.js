import style from './style';

const Inventory = ({ inventory }) => (
  <div className={style.inventory}>
    {Array.isArray(inventory) && inventory.map((object) => {
      return <div className={style['inventory--item']}>
        <img src={`/assets/anothers/${object.name}.svg`} alt={object.name} title={object.description}/>
      </div>
    })}
	</div>
);

export default Inventory;