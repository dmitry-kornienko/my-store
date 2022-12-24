import OperationTableRow from './OperationTableRow';
import '../style/BuyTableItem.css';
import OperationTableHeader from './OperationTableHeader';
import DeleteBtn from './DeleteBtn';

export default function BuyTableItem({ components, date, removeComponent, index, removeOperation }) {

  let total = 0;
  components.forEach((component) => {
    total += component.price * component.count;
  });

  return (
    <div className='buyTableItem'>
      <div className='dateInfo'><span>Дата:</span> {date}</div>
      <OperationTableHeader />
      {components.map(component => 
        <OperationTableRow component={component} removeComponent={removeComponent} key={component.id} />
      )}
      <div className='total'>Итого: <span>{total.toFixed(2)} руб.</span></div>
      <div className='operationBtns'>
        <DeleteBtn onClick={() => removeOperation(index)}>Удалить</DeleteBtn>
      </div>
    </div>
  )
}
