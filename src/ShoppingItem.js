import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditItemForm from './EditItemForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function ShoppingItem({id, itemName, completed, removeItem, toggleItem, editItem}){
    const [isEditing, toggle] = useToggleState(false);
    return(
        <ListItem style={{height: "64px"}}>
            {isEditing ? 
            <EditItemForm editItem={editItem} id={id} itemName={itemName} toggle={toggle} /> 
            : 
            <>
                <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleItem(id)} />
                <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                    {itemName}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => removeItem(id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={toggle}>
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
}

export default ShoppingItem;