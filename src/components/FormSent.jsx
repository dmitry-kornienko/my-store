import React, { useState } from 'react';
import { useContextAll } from '../context/Context';
import Btn from './Btn';
import Input from './Input';
import Select from './Select';
import '../style/PackedPage.css';

export default function FormPacked() {
    const [dateOfDispatch, setDateOfDispatch] = useState('');
    const [datePlanned, setDatePlanned] = useState('');
    const [name, setName] = useState('Комплект');
    const [countProduct, setCountProduct] = useState('');
    const [countBox, setCountBox] = useState('');
    const [weight, setWeight] = useState('');
    const [stock, setStock] = useState('');
    const [invoice, setInvoice] = useState('');
    const [price, setPrice] = useState('');
    const { complects, setComplects, sentList, setSentList } = useContextAll();

    const increaseComplectCount = () => {
        const indexCurrentComplect = complects.findIndex(item => item.name === name);
        const newComplects = [...complects];
        newComplects[indexCurrentComplect].count -= Number(countProduct);
        setComplects(newComplects);
    }
    const sentComplect = (e) => {
        e.preventDefault();
        if (dateOfDispatch && datePlanned && name && countProduct && countBox && weight && stock && invoice && price) {
            const newSentOperation = {
                id: Date.now(),
                dateOfDispatch,
                datePlanned,
                name,
                countProduct,
                countBox,
                weight,
                stock,
                invoice,
                price,
            }
            setSentList([newSentOperation, ...sentList]);
            setCountProduct('');
            setPrice('');
            setName('Комплект');
            setDateOfDispatch('');
            setDatePlanned('');
            setCountBox('');
            setWeight('');
            setStock('');
            setInvoice('');
            increaseComplectCount();
        } else {
            alert('Заполните все поля')
        }
    }

  return (
    <form className='sentForm'>
        <div className='infoCard'>
            <div className='productInfo'>
                <Select
                    value={name}
                    setValue={setName}
                    options={complects}
                    defaultValue='Комплект'
                />
                <Input
                    type='number'
                    value={countProduct}
                    setValue={setCountProduct}
                    placeholder='Кол-во'
                />
            </div>
            <div className='deliveryDate'>
                Дата отправки:
                <Input
                    type='date'
                    value={dateOfDispatch}
                    setValue={setDateOfDispatch}
                />
            </div>
            <div className='deliveryInfo'>
                <Input
                    type='string'
                    value={invoice}
                    setValue={setInvoice}
                    placeholder='Номер накладной'
                    width='130px'
                />
                <Input
                    type='string'
                    value={stock}
                    setValue={setStock}
                    placeholder='Склад'
                />
                <Input
                    type='number'
                    value={countBox}
                    setValue={setCountBox}
                    placeholder='Мест'
                    width='50px'
                />
                <Input
                    type='number'
                    value={weight}
                    setValue={setWeight}
                    placeholder='Вес'
                    width='40px'
                />
                <Input
                    type='number'
                    value={price}
                    setValue={setPrice}
                    placeholder='Стоимость'
                    width='85px'
                />
            </div>
            <div className='plannedDate'>
                Планируемая дата приемки:
                <Input
                    type='date'
                    value={datePlanned}
                    setValue={setDatePlanned}
                />
            </div>
        </div>
        <Btn onClick={sentComplect}>Добавить</Btn>
    </form>
  )
}
