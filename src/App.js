import React, {Component} from 'react'
import MainDrawer from './common/Drawer'
import MainAppBar from './common/AppBar'


class App extends Component {
    state = {
        isDrawerOpen: false
    }

    handleToggle() {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        })
    }

    render() {
        return (
            <div className="App">
                <MainDrawer
                    //przekazujemy propsy do Drawer
                    isDrawerOpen={this.state.isDrawerOpen}
                    handleToggle={() => {
                        this.handleToggle()
                    }}
                />
                <MainAppBar
                    handleToggle={() => {
                        this.handleToggle()
                    }}
                />
            </div>
        )
    }
}

export default App
