import React, { useState } from 'react';
import { useContextAll } from '../context/Context';
import Btn from './Btn';
import DeleteBtn from './DeleteBtn';
import Input from './Input';

export default function SentItem({ complect }) {
  const { complects, setComplects, sentList, setSentList, dateFormat } = useContextAll();
  const [isEditDatePlanned, setIsEditDatePlanned] = useState(false);
  const [editedDate, setEditedDate] = useState('');
  const article = complects.find(item => item.name === complect.name).article;
  const increaseComplectCount = () => {
    const indexCurrentComplect = complects.findIndex(item => item.name === complect.name);
    const newComplects = [...complects];
    newComplects[indexCurrentComplect].count += Number(complect.countProduct);
    setComplects(newComplects);
  }
  const deleteComplect = (id) => {
    increaseComplectCount();
    setSentList(sentList.filter(complect => complect.id !== id));
  }
  const editDatePlanned = () => {
    setIsEditDatePlanned(true);
  }
  const saveEditDate = (id) => {
    if (editedDate) {
      const newSentList = [...sentList];
      const indexOperation = newSentList.findIndex(item => item.id = id);
      newSentList[indexOperation].datePlanned = editedDate;
      setSentList(newSentList);
      setIsEditDatePlanned(false);
    } else {
      alert('Не указана новая дата приемки')
    }
  }

  return (
    <div className='packedItem sentItem'>
      <div className='sentInfo'>
        <div className='packedInfoProduct'>
          <div className='packedDateOfDispatch'><span>{dateFormat(complect.dateOfDispatch)}</span></div>
          <div className='packedName'>{complect.name}</div>
          <div className='packedArticle'>{article}</div>
          <div className='packedCountProduct'>{complect.countProduct} шт.</div>
          <div className='packedPrice'>{complect.price} руб.</div>
        </div>
        <div className='packedInfoDelivery'>
          <div>Накладная: <span>{complect.invoice}</span></div>
          <div>Склад: <span>{complect.stock}</span></div>
          <div>{complect.countBox} мест, {complect.weight} кг.</div>
        </div>
        <div className='acceptDate'>
          {!isEditDatePlanned &&
           <div onDoubleClick={editDatePlanned}>Дата приемки: <span>{dateFormat(complect.datePlanned)}</span></div>
          }
          {isEditDatePlanned &&
            <>
              <Input
                type='date'
                value={editedDate}
                setValue={setEditedDate}
              />
              <Btn onClick={() => saveEditDate(complect.id)}>Сохранить</Btn>
            </>
          }
          <div>Согласовано: 
            <input
              type="checkbox"
            />
          </div>
        </div>
      </div>
      <DeleteBtn onClick={() => deleteComplect(complect.id)}>Удалить</DeleteBtn>
    </div>
  )
}
