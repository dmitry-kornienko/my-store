import React, { useContext, useState } from "react";

const Context = React.createContext();
export const useContextAll = () => {
    return useContext(Context);
}

export const ContextProvider = ({ children }) => {
    const [components, setComponents] = useState([
        {id: 1, name: 'Капельная лента 20-6-1.6', article: '01', price: 1.95, count: 0},
        {id: 2, name: 'Капельная лента 10-6-1.6', article: '02', price: 2.2, count: 0},
        {id: 3, name: 'Слепая лента', article: '03', price: 14, count: 0},
        {id: 4, name: 'Тройник ТЛТ', article: '04', price: 4.5, count: 0},
        {id: 5, name: 'Тройник ЛЛЛ', article: '05', price: 4.5, count: 0},
        {id: 6, name: 'Заглушка ленты', article: '06', price: 4.5, count: 0},
        {id: 7, name: 'Заглушка шланга', article: '07', price: 4.5, count: 0},
        {id: 8, name: 'Ремонтный фитинг', article: '08', price: 4.5, count: 0},
        {id: 9, name: 'Уголок ЛЛ', article: '09', price: 4.5, count: 0},
        {id: 10, name: 'Кран ТТ', article: '10', price: 4.5, count: 0},
        {id: 11, name: 'Кран ТЛ', article: '11', price: 4.5, count: 0},
        {id: 12, name: 'Коробка 30-30-3', article: '12', price: 4.5, count: 0},
        {id: 13, name: 'Коробка 39-26-6', article: '13', price: 4.5, count: 0},
        {id: 14, name: 'Короб 60-40-40', article: '14', price: 4.5, count: 0},
        {id: 15, name: 'Пакет 32-43', article: '15', price: 4.5, count: 0},
        {id: 16, name: 'Этикетка 58-40', article: '16', price: 4.5, count: 0},
    ]);
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [buyTables, setBuyTables] = useState([]);
    const [packedList, setPackedList] = useState([]);
    const [sentList, setSentList] = useState([]);
    const [complects, setComplects] = useState([
        {id: 17, name: 'Ком. 50м на трубке шаг 20 см', article: 'bgr-wp-50-1', count: 0, structure: [
            {id: 1, name: 'Капельная лента 20-6-1.6', count: 50},
            {id: 2, name: 'Тройник ТЛТ', count: 5},
            {id: 3, name: 'Заглушка ленты', count: 5},
            {id: 4, name: 'Заглушка шланга', count: 1},
            {id: 5, name: 'Ремонтный фитинг', count: 2},
            {id: 6, name: 'Кран ТТ', count: 1},
            {id: 7, name: 'Коробка 30-30-3', count: 1},
            {id: 8, name: 'Пакет 32-43', count: 1},
            {id: 9, name: 'Этикетка 58-40', count: 1},
            {id: 10, name: 'Короб 60-40-40', count: 0.042},
        ]},
        {id: 18, name: 'Ком. 100м на ленте шаг 20 см', article: 'bgr-wp-100', count: 0, structure: [
            {id: 1, name: 'Капельная лента 20-6-1.6', count: 100},
            {id: 2, name: 'Тройник ЛЛЛ', count: 9},
            {id: 3, name: 'Заглушка ленты', count: 10},
            {id: 4, name: 'Слепая лента', count: 10},
            {id: 5, name: 'Ремонтный фитинг', count: 3},
            {id: 6, name: 'Кран ТЛ', count: 1},
            {id: 7, name: 'Коробка 39-26-6', count: 1},
            {id: 8, name: 'Пакет 32-43', count: 1},
            {id: 9, name: 'Этикетка 58-40', count: 1},
            {id: 10, name: 'Короб 60-40-40', count: 0.077},
            {id: 11, name: 'Уголок ЛЛ', count: 2},
        ]},
        {id: 19, name: 'Ком. 100м на ленте шаг 10 см', article: 'К-100Л-10', count: 0, structure: [
            {id: 1, name: 'Капельная лента 10-6-1.6', count: 100},
            {id: 2, name: 'Тройник ЛЛЛ', count: 9},
            {id: 3, name: 'Заглушка ленты', count: 10},
            {id: 4, name: 'Слепая лента', count: 10},
            {id: 5, name: 'Ремонтный фитинг', count: 3},
            {id: 6, name: 'Кран ТЛ', count: 1},
            {id: 7, name: 'Коробка 39-26-6', count: 1},
            {id: 8, name: 'Пакет 32-43', count: 1},
            {id: 9, name: 'Этикетка 58-40', count: 1},
            {id: 10, name: 'Короб 60-40-40', count: 0.077},
            {id: 11, name: 'Уголок ЛЛ', count: 2},
        ]},
    ])

    return (
        <Context.Provider
            value={{
                components,
                setComponents,
                isActiveModal,
                setIsActiveModal,
                buyTables,
                setBuyTables,
                complects,
                setComplects,
                packedList,
                setPackedList,
                sentList,
                setSentList,
            }}
        >
            { children }
        </Context.Provider>
    )
}