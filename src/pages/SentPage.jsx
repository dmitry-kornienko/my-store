import React from 'react';
import '../style/App.css';
import FormSent from '../components/FormSent';
import SentList from '../components/SentList';

export default function SentPage() {
  return (
    <div className='page'>
      <FormSent />
      <SentList />
    </div>
  )
}
