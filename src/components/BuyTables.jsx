import React from 'react';
import '../style/BuyTables.css';
import BuyTableItem from './BuyTableItem';

export default function BuyTables({ buyTables }) {
  // console.log(buyTables)
  return (
    <div className='buyTables'>
      {buyTables.map((operation, index) =>
        <BuyTableItem components={operation.components} date={operation.date} key={Date.now() + index} />
      )}
    </div>
  )
}
