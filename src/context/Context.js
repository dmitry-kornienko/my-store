import React, { useContext, useState } from "react";

const Context = React.createContext();

export const useContextAll = () => {
    return useContext(Context);
}

export const ContextProvider = ({ children }) => {
    const [components, setComponents] = useState([
        {id: 1, name: 'Капельная лента 20-6-1.6', article: '01', price: 2.1, count: 0},
        {id: 2, name: 'Слепая лента', article: '02', price: 14, count: 0},
        {id: 3, name: 'Тройник ТЛТ', article: '03', price: 4.5, count: 0},
        {id: 4, name: 'Тройник ЛЛЛ', article: '04', price: 4.5, count: 0},
        {id: 5, name: 'Заглушка ленты', article: '05', price: 4.5, count: 0},
        {id: 6, name: 'Заглушка шланга', article: '06', price: 4.5, count: 0},
        {id: 7, name: 'Ремонтный фитинг', article: '07', price: 4.5, count: 0},
        {id: 8, name: 'Уголок ЛЛ', article: '08', price: 4.5, count: 0},
        {id: 9, name: 'Кран ТТ', article: '09', price: 4.5, count: 0},
        {id: 10, name: 'Кран ТЛ', article: '10', price: 4.5, count: 0},
        {id: 11, name: 'Коробка 30-30-3', article: '11', price: 4.5, count: 0},
        {id: 12, name: 'Коробка 39-26-6', article: '12', price: 4.5, count: 0},
        {id: 13, name: 'Короб 60-40-40', article: '13', price: 4.5, count: 0},
        {id: 14, name: 'Пакет 32-43', article: '14', price: 4.5, count: 0},
        {id: 15, name: 'Этикетка 58-40', article: '15', price: 4.5, count: 0},
    ]);

    const [isActiveModal, setIsActiveModal] = useState(false);

    const [buyTables, setBuyTables] = useState([]);



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