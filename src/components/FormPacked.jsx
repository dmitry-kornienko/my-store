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
    const { complects, setComplects, packedList, setPackedList, components, setComponents,  } = useContextAll();                   
    const indexCurrentComplect = complects.findIndex(item => item.name === name);
    
    const increaseComplectCount = () => {
        const newComplects = [...complects];
        newComplects[indexCurrentComplect].count += Number(count);
        setComplects(newComplects);
    }
    const decreaseComplectCount = () => {
        const newComplects = [...complects];
        newComplects[indexCurrentComplect].count -= Number(count);
        setComplects(newComplects);
    }
    const increaseComponentCount = () => {
        const newComponents = [...components];
        const structure = complects[indexCurrentComplect].structure;
        structure.forEach(component => {
            const indexCurrentComponent = components.findIndex(item => item.name === component.name);
            newComponents[indexCurrentComponent].count += Math.round(count * component.count);
            setComponents(newComponents);
        })
    }
    const decreaseComponentCount = () => {
        const newComponents = [...components];
        const structure = complects[indexCurrentComplect].structure;
        structure.forEach(component => {
            const indexCurrentComponent = components.findIndex(item => item.name === component.name);
            newComponents[indexCurrentComponent].count -= Math.round(count * component.count);
            setComponents(newComponents);
        })
    }
    const backToPrevState = (indicatorNegativeCount) => {
        if (indicatorNegativeCount) {
            alert('Недостаточно комплектующих на складе');
            decreaseComplectCount();
            increaseComponentCount();
            const newPackedList = [...packedList];
            newPackedList.unshift();
            setPackedList(newPackedList);
        }  
    }
    const addComplect = (e) => {
        e.preventDefault();
        if (date && name && count ) {
            const newPackedOperation = {
                id: Date.now(),
                date,
                name,
                count,
            }
            setPackedList([newPackedOperation, ...packedList]);
            setCount('');
            setName('Комплект');
            setDate('');
            increaseComplectCount();
            decreaseComponentCount();
            const isNegativeCountComponents = components.some(item => item.count < 0);
            backToPrevState(isNegativeCountComponents);
        } else {
            alert('Заполните все поля');
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
        <Btn onClick={addComplect}>Добавить</Btn>
    </form>
  )
}
