import React from 'react';
import PackedItem from './PackedItem';
import '../style/PackedPage.css';
import { useContextAll } from '../context/Context';

export default function PackedList() {
    const { packedList } = useContextAll();
    
    return (
        <div className='packedList'>
            {packedList.length
                ?
                packedList.map(item =>
                    <PackedItem complect={item} key={item.id} />
                )
                :
                <div className='emptyList'>Список пуст</div>
            }
        </div>
    )
}
