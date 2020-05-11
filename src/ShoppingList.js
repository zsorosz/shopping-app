import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ShoppingItem from './ShoppingItem';

function ShoppingList(props){
    return(
        <Paper>
            <List>
                {props.items.map(item => (
                    <>
                        <ShoppingItem itemName={item.itemName} key={item.id} completed={item.completed} />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
};

export default ShoppingList;