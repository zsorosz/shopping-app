import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function ShoppingItem({itemName, completed}){
    return(
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} />
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                {itemName}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-lebel="Delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-lebel="Edit">
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default ShoppingItem;