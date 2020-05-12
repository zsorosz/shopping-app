import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid/v4';

export default initialItems => {
    const [items, setItems] = useLocalStorageState("items", initialItems);
    return {
        items,
        addItem: newItemText => {
            setItems([...items, { id: uuid(), itemName: newItemText, completed: false }]);
        },
        removeItem: id => {
            const updatedItems = items.filter(item => item.id !== id);
            setItems(updatedItems);
        },
        toggleItem: id => {
            const updatedItems = items.map(item =>
                item.id === id ? { ...item, completed: !item.completed } : item
            );
            setItems(updatedItems);
        },
        editItem: (id, newItem) => {
            const updatedItems = items.map(item =>
                item.id === id ? { ...item, itemName: newItem } : item
            );
            setItems(updatedItems);
        }
    }
}