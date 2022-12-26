import React, { useState } from 'react';
import '../../style/App.css';
import '../../style/FormAddBuy.css';
import Btn from '../Btn';
import Input from '../Input';
import Select from '../Select';
import { useContextAll } from '../../context/Context';

export default function FormAddBuy({ createNewComponent, date, setDate }) {
    const [name, setName] = useState('Товар');
    const [count, setCount] = useState('');
    const [price, setPrice] = useState('');
    const { components } = useContextAll();

    const addNewComponent = (e) => {
        e.preventDefault();
        if (count && price && name !== 'Товар') {
            const newComponent = {
                id: Date.now(),
                name,
                count,
                price,
            }
            createNewComponent(newComponent);
            setName('Товар');
            setCount('');
            setPrice('');
        } else {
            alert('Заполните все поля')
        }
    }

  return (
    <form className='formBuy'>
        <div className='date'>
            Дата:
            <Input
                type='date'
                value={date}
                setValue={setDate}
            />
        </div>
        <div className='componentInfo'>
            <Select
                value={name}
                setValue={setName}
                options={components}
                defaultValue='Товар'
            />
            <Input
                type='number'
                value={count}
                setValue={setCount}
                placeholder='Кол-во'
            />
            <Input
                type='number'
                value={price}
                setValue={setPrice}
                placeholder='Цена'
            />
            <Btn onClick={addNewComponent}>Добавить</Btn>
        </div>
    </form>
  )
}
