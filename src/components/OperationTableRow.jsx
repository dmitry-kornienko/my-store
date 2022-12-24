import React from 'react';
import '../style/BuyTableRow.css';

export default function BuyTableRow({ component }) {
  return (
    <div className='buyTableRow'>
      <div className='buyTableRow__name'>{component.name}</div>
      <div className='buyTableRow__number'>{component.count}</div>
      <div className='buyTableRow__number'>{component.price}</div>
      <div className='buyTableRow__sum'>{(component.price * component.count).toFixed(2)}</div>
    </div>
  )
}