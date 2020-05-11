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
        }}>
            <TextField 
                margin='normal' 
                value={value} 
                onChange={handleChange} 
                fullWidth 
            />
        </form>
    )
}

export default EditItemForm;