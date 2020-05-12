import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/ToolBar';
import ShoppingList from './ShoppingList.js';
import ShoppingForm from './ShoppingForm.js';
import uuid from 'uuid/v4';

function ShoppingApp(){
    const initialItems = JSON.parse(window.localStorage.getItem('items') || "[]");
    // const initialItems = [
    //     { id: 1, itemName: "Milk", completed: false },
    //     { id: 2, itemName: "Bread", completed: true },
    //     { id: 3, itemName: "Tomatoes", completed: false }
    // ];
    const [items, setItems] = useState(initialItems);

    useEffect(() => {
        window.localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    const addItem = newItemText => {
        setItems([...items, { id: uuid(), itemName: newItemText, completed: false }]);
    };
    const removeItem = id => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    };
    const toggleItem = id => {
        const updatedItems = items.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        );
        setItems(updatedItems);
    }
    const editItem = (id, newItem) => {
        const updatedItems = items.map(item =>
            item.id === id ? { ...item, itemName: newItem } : item
        );
        setItems(updatedItems);
    }
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
            <Grid container justify="center" style={{marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <ShoppingForm 
                        addItem={addItem} 
                    />
                    <ShoppingList 
                        items={items} 
                        removeItem={removeItem} 
                        toggleItem={toggleItem} 
                        editItem={editItem}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ShoppingApp;