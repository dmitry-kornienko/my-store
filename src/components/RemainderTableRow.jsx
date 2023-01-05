import { useState } from 'react';
import { useContextAll } from '../context/Context';
import '../style/RemainderPage.css';
import Input from '../components/Input';
import Btn from '../components/Btn';

export default function RemainderTableRow({ item, index }) {

  const { components, setComponents, complects, setComplects } = useContextAll();
  const [isEditCount, setIsEditCount] = useState(false);
  const [editedCount, setEditedCount] = useState(item.count);

  const changeCount = () => {
    setIsEditCount(true)
  }
  const saveEditedCount = () => {
    if (item.id <= 16) {
      const newComponents = [...components];
      newComponents[index].count = Number(editedCount);
      setComponents(newComponents);
      setIsEditCount(false);
    } else {
      const newComplect = [...complects];
      const indexCurrentComplect = complects.findIndex(complect => complect.name === item.name);
      newComplect[indexCurrentComplect].count = Number(editedCount);
      setComplects(newComplect);
      setIsEditCount(false);
    }
  }
  return (
    <div className='remainderTableRow'>
        <div className='idColumn'>{item.id}</div>
        <div className='nameColumn'>{item.name}</div>
        <div className='numberColumn'>{item.article}</div>
        {!isEditCount
        ?
          <div onDoubleClick={changeCount} className='numberColumn'>{item.count}</div>
        :
          <div className='numberColumn'>
            <Input
              value={editedCount}
              setValue={setEditedCount}
              type='number'
              width='70px'
            />
            <Btn onClick={saveEditedCount}>Сохранить</Btn>
          </div>
      }
    </div>
  )
}
