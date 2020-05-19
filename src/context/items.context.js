import React, { createContext } from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import reducer from '../reducers/item.reducer';

const defaultItems = [
    {id: 1, itemName: "Milk", completed: false },
    {id: 2, itemName: "Bread", completed: false },
    {id: 3, itemName: "Butter", completed: false }
];
export const ItemsContext = createContext();
export const DispatchContext = createContext();

export function ItemsProvider(props) {
    const [items, dispatch] = useLocalStorageReducer("items", defaultItems, reducer);
    return(
        <ItemsContext.Provider value={items}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </ItemsContext.Provider>
    );
}
