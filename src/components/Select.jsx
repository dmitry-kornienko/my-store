import React from 'react';
import '../style/Select.css';

export default function Select({ options, defaultValue, value, setValue }) {

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <select
      value={value}
      onChange={handleChange}
      className='select'
    >
        <option disabled>{defaultValue}</option>
        {options.map(component => 
            <option key={component.id}>{component.name}</option>
        )}
    </select>
  )
}
