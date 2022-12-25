import React from 'react';
import FormPacked from '../components/FormPacked';
import '../style/App.css';
import PackedList from '../components/PackedList';

export default function PackedPage() {
  return (
    <div className='page'>
      <FormPacked />
      <PackedList />
    </div>
  )
}
