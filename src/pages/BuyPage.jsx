import React from 'react'
import Btn from '../components/Btn';
import BuyTables from '../components/BuyTables';
import Modal from '../components/modal/Modal';
import '../style/App.css';
import { useContextAll } from '../context/Context';


export default function BuyPage() {
  const { setIsActiveModal, buyTables } = useContextAll();

  return (
      <div className='page'>
        <Btn onClick={() => setIsActiveModal(true) }>Добавить операцию</Btn>
        {buyTables.length
          ?
          <BuyTables buyTables={buyTables} />
          :
          <div className='emptyList'>Список пуст</div>
          }
        <Modal />
      </div>
  )
}
