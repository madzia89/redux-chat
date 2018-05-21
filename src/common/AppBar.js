import React from 'react'

import AppBar from '@material-ui/core/AppBar'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import {withStyles} from '@material-ui/core/styles'


const MainAppBar = (props) => {
    return (
        <AppBar position={'static'}>
            <IconButton
                onClick={() => props.handleToggle()}
            >
                <MenuIcon/>
            </IconButton>
        </AppBar>
    )
}

export default MainAppBar