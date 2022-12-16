import React from 'react'
import '../style/Input.css'

export default function Input({ placeholder, value, setValue, type }) {
  return (
    <input className={type === 'date' ? 'inputDate input' : 'input'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        type={type}
    />
  )
}
