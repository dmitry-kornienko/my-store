import React from 'react';
import BuyTableRow from './BuyTableRow';
import '../style/BuyTableItem.css';
import BuyTableItemHeader from './BuyTableItemHeader';

export default function BuyTableItem({ components, date, removeComponent }) {
  let total = 0;
  components.forEach((component) => {
    total += component.price * component.count;
  });

  return (
    <div className='buyTableItem'>
      <div className='dateInfo'><span>Дата:</span> {date}</div>
      <BuyTableItemHeader />
      {components.map(component => 
        <BuyTableRow component={component} removeComponent={removeComponent} key={component.id} />
      )}
      <div className='total'>Итого: <span>{total.toFixed(2)} руб.</span></div>
    </div>
  )
}
