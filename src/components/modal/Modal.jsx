import React, { useState } from 'react';
import { useContextAll } from '../../context/Context';
import '../../style/Modal.css';
import Btn from '../Btn';
import BuyTableItem from '../BuyTableItem';
import FormAddBuy from './FormAddBuy';

export default function Modal() {
  const { isActiveModal, setIsActiveModal, buyTables, setBuyTables, components, setComponents } = useContextAll();
  const [newComponents, setNewComponents] = useState([]);
  const [date, setDate] = useState('');

  const createNewComponent = (newComponent) => {
    setNewComponents([...newComponents, newComponent]);
  }
  const removeComponent = (component) => {
    setNewComponents(newComponents.filter((item) => item.id !== component.id));
  }
  const cancelModal = () => {
    setNewComponents([]);
    setIsActiveModal(false);
  }
  const addBuyTable = () => {
    if (date) {
      const newOperation = {
        id: Date.now(),
        components: newComponents,
        date,
      }
      newComponents.forEach(item => {
        const indexCurrentComponent = components.findIndex(component => component.name === item.name);
        const newComponents = [...components];
        newComponents[indexCurrentComponent].count += Number(item.count);
        setComponents(newComponents);
      })
      setBuyTables([newOperation, ...buyTables]);
      setDate('');
      setNewComponents([]);
      setIsActiveModal(false);
    } else {
      alert('Не указана дата проведения операции')
    }
  }

  return (
    <div className={isActiveModal ? 'active modal' : 'modal'} onClick={() => setIsActiveModal(false)}>
      <div className='modalContent' onClick={e => e.stopPropagation()}>
        <FormAddBuy newComponents={newComponents} setNewComponents={setNewComponents} date={date} setDate={setDate} createNewComponent={createNewComponent} />
        {newComponents.length
          ?
          <>
            <BuyTableItem components={newComponents} setComponents={setNewComponents} removeComponent={removeComponent} />
            <div className='buyTable_btns'>
              <Btn onClick={addBuyTable}>Провести операцию</Btn>
              <Btn onClick={cancelModal}>Отмена</Btn>
            </div>
          </>
          :
          <div className='emptyList'>
            Список пуст, добавьте компоненты
          </div>
        }
      </div>
    </div>
  )
}
