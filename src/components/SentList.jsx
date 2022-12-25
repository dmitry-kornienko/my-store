import React from 'react';
import SentItem from './SentItem';
import '../style/PackedPage.css';
import { useContextAll } from '../context/Context';

export default function PackedList() {
    const { sentList } = useContextAll();
    
    return (
        <div className='packedList'>
            {sentList.length
                ?
                sentList.map(item =>
                    <SentItem complect={item} key={item.id} />
                )
                :
                <div className='emptyList'>Список пуст</div>
            }
        </div>
    )
}
