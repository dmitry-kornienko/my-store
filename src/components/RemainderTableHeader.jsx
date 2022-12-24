import React from 'react';
import '../style/RemainderPage.css';

export default function RemainderTableHeader() {
  return (
    <div className='remainderTableHeader'>
        <div className='idColumn'>№</div>
        <div className='nameColumn'>Наименование</div>
        <div className='numberColumn'>Артикул</div>
        <div className='numberColumn'>Кол-во</div>
    </div>
  )
}
