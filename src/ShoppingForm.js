import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { ItemsContext } from './context/items.context';

function ShoppingForm(){
    const [value, handleChange, reset] = useInputState("");
    const { dispatch } = useContext(ItemsContext);
    return(
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <form 
                onSubmit={e => {
                    e.preventDefault();
                    dispatch({type: "ADD", itemName: value});
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