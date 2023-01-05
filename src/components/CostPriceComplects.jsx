import React from 'react';
import { useContextAll } from '../context/Context';
import CostPriceComplectItem from './CostPriceComplectItem';
import '../style/RemainderPage.css';

export default function CostPriceComplects() {
  const { complects } = useContextAll(); 
  return (
    <div className='costPrice'>
        <div className='costPrice__header'>Себестоимость комплектов</div>
        {complects.map(complect =>
          <CostPriceComplectItem complect={complect} key={complect.id} />
        )}
    </div>
  )
}
