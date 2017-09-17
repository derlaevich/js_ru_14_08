import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Localization extends Component {
    static childContextTypes = {
        localization: PropTypes.object
    };

    getChildContext() {
        return {
            localization: {
                currentLocalizationCode: 'ru',
                availableLocalizations: ['ru', 'en'],
                langList: {
                    ru: {
                        menu: {
                            name: 'меню',
                            counter: {
                                name: 'счетчик',
                            },
                            articles: {
                                name: 'статьи',
                            },
                            filters: {
                                name: 'фильтры',
                            },
                        }
                    },
                    en: {
                        menu: {
                            name: 'меню',
                            counter: {
                                name: 'counter',
                            },
                            articles: {
                                name: 'articles',
                            },
                            filters: {
                                name: 'filters',
                            },
                        }
                    }
                }
            }
        };
    }

    render() {
        const { children } = this.props;
        return <div> {children} </div>
    }
}