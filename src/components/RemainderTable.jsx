import React from 'react';
import { useContextAll } from '../context/Context';
import RemainderTableRow from './RemainderTableRow';
import RemainderTableHeader from '../components/RemainderTableHeader';



export default function RemainderTable() {
    const { components } = useContextAll();
  return (
    <div className='remainderTable'>
        <RemainderTableHeader />
        {components.map(item =>
            <RemainderTableRow item={item} key={item.id} />
        )}
    </div>
  )
}
