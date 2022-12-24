import React from 'react';
import '../style/RemainderPage.css';

export default function RemainderTableRow({ item }) {
  return (
    <div className='remainderTableRow'>
        <div className='idColumn'>{item.id}</div>
        <div className='nameColumn'>{item.name}</div>
        <div className='numberColumn'>{item.article}</div>
        <div className='numberColumn'>{item.count}</div>
    </div>
  )
}
