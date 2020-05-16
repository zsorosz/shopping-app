import React, { useEffect } from 'react';
import useItemState from './hooks/useItemState';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/ToolBar';
import ShoppingList from './ShoppingList.js';
import ShoppingForm from './ShoppingForm.js';
import { ItemsProvider } from './context/items.context';

function ShoppingApp(){
    const initialItems = [];
    const { items, addItem, removeItem, toggleItem, editItem } = useItemState(initialItems);
    
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
                    <ItemsProvider>
                        <ShoppingForm 
                            addItem={addItem} 
                        />
                        <ShoppingList 
                            items={items} 
                            removeItem={removeItem} 
                            toggleItem={toggleItem} 
                            editItem={editItem}
                        />
                    </ItemsProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ShoppingApp;