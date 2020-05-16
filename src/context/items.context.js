import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/item.reducer';
import useItemState from '../hooks/useItemState';

const defaultItems = [
    {id: 1, itemName: "Milk", completed: false },
    {id: 2, itemName: "Bread", completed: false },
    {id: 3, itemName: "Butter", completed: false }
];
export const ItemsContext = createContext();

export function ItemsProvider(props) {
    const [items, dispatch] = useReducer(reducer, defaultItems);
    return(
        <ItemsContext.Provider value={{items, dispatch}}>
            {props.children}
        </ItemsContext.Provider>
    );
}
