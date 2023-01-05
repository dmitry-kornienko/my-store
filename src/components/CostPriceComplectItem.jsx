import React from 'react';
import { useContextAll } from '../context/Context';
import '../style/RemainderPage.css';

export default function CostPriceComplectItem({ complect }) {
    const { components } = useContextAll();
    let total = 0;
    complect.structure.forEach(component => {
        const indexCurrentComponent = components.findIndex(item => item.name === component.name);
        const sum = component.count * components[indexCurrentComponent].price
        total += sum
    })
  return (
    <div className='costPriceComplectItem'>
        <div>{complect.name} ({complect.article}) - {total.toFixed(2)} руб.</div>
    </div>
  )
}
