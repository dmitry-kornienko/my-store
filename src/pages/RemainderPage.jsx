import React from 'react';
import CostPriceComplects from '../components/CostPriceComplects';
import RemainderTable from '../components/RemainderTable';
import '../style/App.css';
import '../style/RemainderPage.css';

export default function RemainderPage() {
  return (
    <div className='page'>
      <RemainderTable />
      <CostPriceComplects />
    </div>
  )
}
