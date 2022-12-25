import React, { useState } from 'react';
import { useContextAll } from '../context/Context';
import Btn from './Btn';
import Input from './Input';
import Select from './Select';
import '../style/PackedPage.css';

export default function FormPacked() {
    const [date, setDate] = useState('');
    const [name, setName] = useState('Комплект');
    const [count, setCount] = useState('');
    const { complects, setComplects, sentList, setSentList } = useContextAll();

    const increaseComplectCount = () => {
        const indexCurrentComplect = complects.findIndex(item => item.name === name);
        const newComplects = [...complects];
        newComplects[indexCurrentComplect].count -= Number(count);
        setComplects(newComplects);
    }
    const sentComplect = (e) => {
        e.preventDefault();
        if (date && name && count) {
            const newSentOperation = {
                id: Date.now(),
                date,
                name,
                count,
            }
            setSentList([newSentOperation, ...sentList]);
            setCount('');
            setName('Комплект');
            setDate('');
            increaseComplectCount();
        }
    }

  return (
    <form className='packedForm'>
        <Input
            type='date'
            value={date}
            setValue={setDate}
        />
        <Select
            value={name}
            setValue={setName}
            options={complects}
            defaultValue='Комплект'
        />
        <Input
            type='number'
            value={count}
            setValue={setCount}
            placeholder='Кол-во'
        />
        <Btn onClick={sentComplect}>Добавить</Btn>
    </form>
  )
}
