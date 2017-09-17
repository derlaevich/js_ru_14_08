import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LocalizationSwitch extends Component {
    render() {
        const { availableLocalizations, currentLocalizationCode, handleLocalizationCodeChange } = this.props;

        return <ul>{availableLocalizations.map(code =>
            <li key={code} onClick={() => handleLocalizationCodeChange(code)}>{currentLocalizationCode === code ? <strong>{code}</strong> : code}</li>
        )}  </ul>
    }
}