import React, {Component} from 'react'

import {withStyles} from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'

const Menu = () => {
    return (
        <List>
            <Divider/>
            <MenuItem>Logowanie</MenuItem>
            <MenuItem>Wiadomości</MenuItem>
            <Divider/>
            <MenuItem>Użytkownicy</MenuItem>
        </List>
    )
}

export default Menu