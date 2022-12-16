import React from 'react';
import '../style/BuyTableItemHeader.css';

export default function BuyTableItemHeader() {
  return (
    <div className='buyTableItemHeader'>
        <div className='buyTableItemHeader__name'>Наименование</div>
        <div className='buyTableItemHeader__number'>Кол-во</div>
        <div className='buyTableItemHeader__number'>Цена</div>
        <div className='buyTableItemHeader__sum'>Сумма</div>
        {/* <div className='emptiDiv'></div> */}
    </div>
  )
}
