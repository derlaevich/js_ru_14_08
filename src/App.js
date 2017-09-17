import React, { Component } from 'react'
import Root from './components/Root'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store from './store'
import history from './history'
import Localization from './components/Localization/Localization'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Localization>
                        <Root />
                    </Localization>
                </ConnectedRouter>
            </Provider>
        )
    }
}