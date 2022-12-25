import React from 'react';
import { useContextAll } from '../context/Context';
import DeleteBtn from './DeleteBtn';

export default function PackedItem({ complect }) {
  const { complects, setComplects, packedList, setPackedList, components, setComponents } = useContextAll();
  const article = complects.find(item => item.name === complect.name).article;
  const decreaseComplectCount = () => {
    const indexCurrentComplect = complects.findIndex(item => item.name === complect.name);
    const newComplects = [...complects];
    newComplects[indexCurrentComplect].count -= Number(complect.count);
    setComplects(newComplects);
  }
  const decreaseComponentCount = () => {
    const newComponents = [...components];
    const indexCurrentComplect = complects.findIndex(i => i.name === complect.name);
    const structure = complects[indexCurrentComplect].structure;
    structure.forEach(component => {
        const indexCurrentComponent = components.findIndex(item => item.name === component.name);
        newComponents[indexCurrentComponent].count += Math.round(complect.count * component.count);
        setComponents(newComponents);
    })
}
const deleteComplect = (id) => {
  decreaseComplectCount();
  decreaseComponentCount();
  setPackedList(packedList.filter(complect => complect.id !== id));
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
