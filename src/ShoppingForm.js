import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function ShoppingForm({addItem}){
    const [value, handleChange, reset] = useInputState("");
    return(
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <form 
                onSubmit={e => {
                    e.preventDefault();
                    addItem(value);
                    reset();
            }}>
                <TextField 
                    value={value} 
                    onChange={handleChange} 
                    margin="normal" 
                    lebel="Add New Item" 
                    fullWidth 
                />
            </form>
        </Paper>
    )
}

export default ShoppingForm;