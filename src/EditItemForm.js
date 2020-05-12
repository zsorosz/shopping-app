import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditItemForm({id, editItem, itemName, toggle}){
    const [value, handleChange, reset] = useInputState(itemName);
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            editItem(id, value);
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