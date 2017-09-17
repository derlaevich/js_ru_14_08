import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string,
        localization: PropTypes.object
    }

    render() {
        console.log('context', this.context.localization)
        const { currentLocalizationCode, langList } = this.context.localization;
        const lang = langList[currentLocalizationCode];
        return (
            <div>
                <h2>User: {this.context.user}</h2>
                <h3>{lang.menu.name}:</h3>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export { MenuItem }
export default Menu