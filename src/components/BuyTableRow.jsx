import React from 'react';
import '../style/BuyTableRow.css';
import DeleteBtn from './DeleteBtn';

export default function BuyTableRow({ component, removeComponent }) {
  return (
    <div className='buyTableRow'>
      <div className='buyTableRow__name'>{component.name}</div>
      <div className='buyTableRow__number'>{component.count}</div>
      <div className='buyTableRow__number'>{component.price}</div>
      <div className='buyTableRow__sum'>{(component.price * component.count).toFixed(2)}</div>
      <DeleteBtn onClick={() => removeComponent(component)}>x</DeleteBtn>
    </div>
  )
}
