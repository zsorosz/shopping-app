import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ShoppingItem from './ShoppingItem';

function ShoppingList({items, removeItem}){
    return(
        <Paper>
            <List>
                {items.map(item => (
                    <>
                        <ShoppingItem 
                            id={item.id}
                            itemName={item.itemName} 
                            key={item.id} 
                            completed={item.completed} 
                            removeItem={removeItem}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
};

export default ShoppingList;