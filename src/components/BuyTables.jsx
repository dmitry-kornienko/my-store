import React from 'react';
import { useContextAll } from '../context/Context';
import OperationTable from './OperationTable';
import '../style/BuyTables.css';

export default function BuyTables({ buyTables, setBuyTables }) {
  const { components, setComponents } = useContextAll();
  const removeOperation = (index) => {
    const newBuyTables = [...buyTables];
    const operationComponents = newBuyTables[index].components;
    operationComponents.forEach(item => {
      const indexCurrentComponent = components.findIndex(component => component.name === item.name);
      const newComponents = [...components];
      newComponents[indexCurrentComponent].count -= Number(item.count);
      setComponents(newComponents);
    })
    newBuyTables.splice(index, 1);
    setBuyTables(newBuyTables);
  }
  return (
    <div className='buyTables'>
      {buyTables.map((operation, index) =>
        <OperationTable components={operation.components} date={operation.date} index={index} removeOperation={removeOperation} key={Date.now() + index} />
      )}
    </div>
  )
}
