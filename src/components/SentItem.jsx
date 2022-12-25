import React from 'react';
import { useContextAll } from '../context/Context';
import DeleteBtn from './DeleteBtn';

export default function SentItem({ complect }) {
  const { complects, setComplects, sentList, setSentList } = useContextAll();
  const article = complects.find(item => item.name === complect.name).article;
  const increaseComplectCount = () => {
    const indexCurrentComplect = complects.findIndex(item => item.name === complect.name);
    const newComplects = [...complects];
    newComplects[indexCurrentComplect].count += Number(complect.count);
    setComplects(newComplects);
  }
  const deleteComplect = (id) => {
    increaseComplectCount();
    setSentList(sentList.filter(complect => complect.id !== id));
  }

  return (
    <div className='packedItem'>
        <div className='packedDate'>{complect.date}</div>
        <div className='packedName'>{complect.name}</div>
        <div className='packedArticle'>{article}</div>
        <div className='packedCount'>{complect.count} шт.</div>
        <DeleteBtn onClick={() => deleteComplect(complect.id)}>x</DeleteBtn>
    </div>
  )
}
