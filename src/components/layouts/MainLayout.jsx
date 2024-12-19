import React, {useState} from 'react'
import {Link, Outlet} from 'react-router-dom'
import {Home,Inventory,Menu} from '@mui/icons-material'
import {AppBar, Box, Drawer, List, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography} from '@mui/material'


function MainLayout(){
   

    return (
        // parent
      <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        {/* children */}
        <Box sx={{flex: 1, display: 'flex', minHeight:0}}>
            {/* header and nav */}
            <Box>
                <AppBar sx={{zIndex: theme => theme.zIndex.drawer + 1}}>
                    <Toolbar>
                        <Typography variant='h6' component='div'>
                            Ecommerce Website
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* content */}
            <Box pt={8} sx={{height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <Outlet/>
            </Box>
        </Box>
      </Box>
    )
}

export default MainLayout