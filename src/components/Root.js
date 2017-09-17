import React, { Component, PropTypes } from 'react'
import ArticlesPage from './Routes/ArticlesPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import CommentsPage from './Routes/CommentsPage'
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import NotFoundPage from './Routes/NotFoundPage'
import Menu, { MenuItem } from './Menu'
import LocalizationSwitch from './Localization/LocalizationSwitch'

export default class Root extends Component {
    state = {
        username: '',
        currentLocalizationCode: null,
        availableLocalizations: []
    }

    componentWillMount() {
        if (!this.state.currentLocalizationCode) {
            const { currentLocalizationCode, availableLocalizations } = this.context.localization;
            this.setState({ currentLocalizationCode, availableLocalizations });
        }
    }

    static childContextTypes = {
        user: PropTypes.string,
        localization: PropTypes.object
    }

    static contextTypes = {
        localization: PropTypes.object
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    render() {
        console.log('---', 1)
        const { availableLocalizations, currentLocalizationCode } = this.state;

        console.log('=======================', currentLocalizationCode)
        console.log('=======================', availableLocalizations)
        const { langList } = this.context.localization;
        const lang = langList[currentLocalizationCode];
        return (
            <div>
                <LocalizationSwitch
                    currentLocalizationCode={currentLocalizationCode}
                    availableLocalizations={availableLocalizations}
                    handleLocalizationCodeChange={this.handleLocalizationCodeChange} />
                <h2>Menu</h2>
                <Menu>
                    <MenuItem link={lang.menu.counter.name} />
                    <MenuItem link={lang.menu.articles.name} />
                    <MenuItem link={lang.menu.filters.name} />
                </Menu>
                <div>
                    <h1>News App</h1>
                    <UserForm value={this.state.username} onChange={this.handleUserChange} />
                    <Switch>
                        <Redirect from="/" exact to="/articles" />
                        <Route path="/counter" component={Counter} exact />
                        <Route path="/filters" component={Filters} />
                        <Route path="/articles/new" render={this.getArticleForm} />
                        <Route path="/article" to="/articles" />
                        <Route path="/articles" component={ArticlesPage} />
                        <Route path='/comments' component={CommentsPage} />
                        <Route path="/error" render={() => <h1>Error</h1>} />
                        <Route path="*" component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        )
    }

    handleUserChange = (username) => this.setState({ username })
    handleLocalizationCodeChange = (currentLocalizationCode) => this.setState({ currentLocalizationCode })

    getArticleForm = () => <h2>New Article form</h2>
}