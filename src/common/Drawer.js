import React, {Component} from 'react'

import Drawer from '@material-ui/core/Drawer'
import Menu from './Menu'

//HOC który pozwala wrzucić style d o componentu
import {withStyles} from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'


//style wg material-ui
const styles = theme => ({
    drawerPaper: {
        position: 'fixed',
        width: 300,
    }
})


class MainDrawer extends Component {


    render() {

        console.log(this.props)
        const {isDrawerOpen, handleToggle} = this.props

        return (
            <div>
                <Drawer
                    variant="persistent"
                    anchor={'left'}
                    open={isDrawerOpen}
                    classes={{
                        paper: this.props.classes.drawerPaper
                    }}
                >
                    <IconButton onClick={() => {
                        handleToggle()
                    }}>
                        <Close/>
                    </IconButton>
                    <h1 style={{textAlign: 'center'}}>test</h1>
                    <Menu/>
                </Drawer>

            </div>
        )
    }
}

//eksportujemy komponent gdzie bierzemy hoc do którego wrzucamy style, wrzucamy obiekt ustawień i samego maindrawera
//withTheme wynika z dokumentacji material-ui a nie z mądrości
export default withStyles(styles, {withTheme: true})(MainDrawer)