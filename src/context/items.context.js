import React, { createContext } from 'react';
import useItemState from '../hooks/useItemState';

const defaultItems = [
    {id: 1, itemName: "Milk", completed: false },
    {id: 2, itemName: "Bread", completed: false },
    {id: 3, itemName: "Butter", completed: false }
];
export const ItemsContext = createContext();

export function ItemsProvider(props) {
    const itemsStuff = useItemState(defaultItems);
    return(
        <ItemsContext.Provider value={itemsStuff}>
            {props.children}
        </ItemsContext.Provider>
    )
}
