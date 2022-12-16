import React, { useContext, useState } from "react";


const Context = React.createContext();

export const useContextAll = () => {
    return useContext(Context);
}

export const ContextProvider = ({ children }) => {
    const [components, setComponents] = useState([
        {id: 1, name: 'Капельная лента 20-6-1.6', price: 2.1, count: 270000},
        {id: 2, name: 'Слепая лента', price: 14, count: 4500},
        {id: 3, name: 'Тройник ТЛТ', price: 4.5, count: 7000},
        {id: 4, name: 'Тройник ЛЛЛ', price: 4.5, count: 7000},
        {id: 5, name: 'Заглушка ленты', price: 4.5, count: 7000},
        {id: 6, name: 'Заглушка шланга', price: 4.5, count: 7000},
        {id: 7, name: 'Ремонтный фитинг', price: 4.5, count: 7000},
        {id: 8, name: 'Уголок ЛЛ', price: 4.5, count: 7000},
        {id: 9, name: 'Кран ТТ', price: 4.5, count: 7000},
        {id: 10, name: 'Кран ТЛ', price: 4.5, count: 7000},
        {id: 11, name: 'Коробка 30-30-3', price: 4.5, count: 7000},
        {id: 12, name: 'Коробка 39-26-6', price: 4.5, count: 7000},
        {id: 13, name: 'Короб 60-40-40', price: 4.5, count: 7000},
        {id: 14, name: 'Пакет 32-43', price: 4.5, count: 7000},
        {id: 15, name: 'Этикетка 58-40', price: 4.5, count: 7000},
    ]);
    // const [buyComponents, setByuComponents] = useState([
    //     {id: 1, name: 'Капельная лента 20-6-1.6', price: 2.1, count: 270000},
    //     {id: 2, name: 'Слепая лента', price: 14, count: 4500},
    //     {id: 3, name: 'Тройник ТЛТ', price: 4.5, count: 7000},
    // ]);

    const [isActiveModal, setIsActiveModal] = useState(false);

    const [buyTables, setBuyTables] = useState([
        {id: 1, date: '2022-12-08', components: [
            {id: 1, name: 'Капельная лента', count: 3000, price: 7},
            {id: 2, name: 'Тройник ТЛТ', count: 7500, price: 13},
            {id: 3, name: 'Ремонтный фитинг', count: 950, price: 5},
        ]},
        {id: 2, date: '2022-10-11', components: [
            {id: 1, name: 'Капельная лента', count: 3000, price: 7},
            {id: 2, name: 'Тройник ТЛТ', count: 7500, price: 13},
            {id: 3, name: 'Ремонтный фитинг', count: 950, price: 5},
            {id: 4, name: 'Заглушка ленты', count: 2950, price: 9},
        ]},
        {id: 3, date: '2022-07-03', components: [
            {id: 1, name: 'Капельная лента', count: 3000, price: 7},
            {id: 2, name: 'Тройник ТЛТ', count: 7500, price: 13},
            {id: 3, name: 'Ремонтный фитинг', count: 950, price: 5},
            {id: 4, name: 'Заглушка шланга', count: 450, price: 2},
            {id: 5, name: 'Коробка', count: 50, price: 15},
        ]},
    ]);



    return (
        <Context.Provider
            value={{
                components,
                setComponents,
                isActiveModal,
                setIsActiveModal,
                buyTables,
                setBuyTables,
            }}
        >
            { children }
        </Context.Provider>
    )
}