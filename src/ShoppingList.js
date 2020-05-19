import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ShoppingItem from './ShoppingItem';
import { ItemsContext } from './context/items.context';

function ShoppingList(){
    const items = useContext(ItemsContext);
    if(items.length)
    return(
        <Paper>
            <List>
                {items.map((item, i) => (
                    <>
                        <ShoppingItem 
                            {...item}
                            key={item.id}  
                        />
                        {i < items.length -1 && <Divider />}
                    </>
                ))}
            </List>
        </Paper>
    );
    return null;
};

export default ShoppingList;