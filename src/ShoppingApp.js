import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ToolBar from '@material-ui/core/ToolBar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/ToolBar';
import ShoppingList from './ShoppingList.js';

function ShoppingApp(){
    const initialItems = [
        { id: 1, itemName: "Milk", completed: false },
        { id: 2, itemName: "Bread", completed: true },
        { id: 3, itemName: "Tomatoes", completed: false }
    ];
    const [items, setItems] = useState(initialItems);
    return(
        <Paper 
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherits'>
                        SHOPPING LIST WITH HOOKS
                    </Typography>
                </Toolbar>
            </AppBar>
            <ShoppingList items={items} />
        </Paper>
    )
}

export default ShoppingApp;