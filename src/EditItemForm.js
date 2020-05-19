import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import { DispatchContext } from './context/items.context';

function EditItemForm({id, itemName, toggle}){
    const dispatch = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState(itemName);
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch({type: "EDIT", id: id, newItem: value});
            reset();
            toggle();
            }}
            style={{marginLeft: "1rem", width: "50%"}}
        >
            <TextField 
                margin='normal' 
                value={value} 
                onChange={handleChange} 
                fullWidth 
                autoFocus
            />
        </form>
    )
}

export default EditItemForm;