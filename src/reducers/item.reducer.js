import uuid from 'uuid/v4';

const reducer = (state, action) => {
    switch(action.type){
        case "ADD":
            return [...state, { id: uuid(), itemName: action.itemName, completed: false }];
        case "REMOVE":
            return state.filter(item => item.id !== action.id);
        case "TOGGLE":
            return state.map(item =>
                item.id === action.id ? { ...item, completed: !item.completed } : item);
        case "EDIT":
            return state.map(item => item.id === action.id ? { ...item, itemName: action.newItem } : item);
        default:
            return state;
    }
}

export default reducer;

// addItem: newItemText => {
//     setItems([...items, { id: uuid(), itemName: newItemText, completed: false }]);
// },
// removeItem: id => {
//     const updatedItems = items.filter(item => item.id !== id);
//     setItems(updatedItems);
// },
// toggleItem: id => {
//     const updatedItems = items.map(item =>
//         item.id === id ? { ...item, completed: !item.completed } : item
//     );
//     setItems(updatedItems);
// },
// editItem: (id, newItem) => {
//     const updatedItems = items.map(item =>
//         item.id === id ? { ...item, itemName: newItem } : item
//     );
//     setItems(updatedItems);
// }