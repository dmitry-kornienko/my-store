import React from 'react';
import { useContextAll } from '../context/Context';
import RemainderTableRow from './RemainderTableRow';
import RemainderTableHeader from '../components/RemainderTableHeader';

export default function RemainderTable() {
    const { components, complects } = useContextAll();
    const sumArrComponents = [...components, ...complects];
    
  return (
    <div className='remainderTable'>
        <RemainderTableHeader />
        {sumArrComponents.map((item, index) =>
            <RemainderTableRow item={item} index={index} key={item.id} />
        )}
    </div>
  )
}
