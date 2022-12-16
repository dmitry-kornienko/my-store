import React from 'react';
import '../style/DeleteBtn.css';

export default function DeleteBtn({ children, ...props }) {
  return (
    <button {...props} className='deleteBtn'>
        {children}
    </button>
  )
}
