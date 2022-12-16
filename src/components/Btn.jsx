import React from 'react';
import '../style/Btn.css';

export default function Btn({ children, ...props }) {
  return (
    <button {...props} className='btn'>
        {children}
    </button>
  )
}
