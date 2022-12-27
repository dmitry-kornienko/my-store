import React from 'react';
import { useContextAll } from '../context/Context';
import DeleteBtn from './DeleteBtn';

export default function SentItem({ complect }) {
  const { complects, setComplects, sentList, setSentList } = useContextAll();
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

  return (
    <div className='packedItem sentItem'>
      <div className='sentInfo'>
        <div className='packedInfoProduct'>
          <div className='packedDateOfDispatch'>{complect.dateOfDispatch}</div>
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
          <div>Дата приемки: <span>{complect.datePlanned}</span></div>
          <div>Согласовано: <input type="checkbox" /></div>
        </div>
      </div>
      <DeleteBtn onClick={() => deleteComplect(complect.id)}>Удалить</DeleteBtn>
    </div>
  )
}
