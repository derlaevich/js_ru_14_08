import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import { setIdsFilterArticleList } from '../../AC/index'
import { connect } from 'react-redux'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    handleSelectionChange = selected => {
        this.props.setIdsFilterArticleList(selected.map(function (item) {
            return item.value;
        }));
    }

    render() {
        const { articles, selectedIds } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selectedIds}
            onChange={this.handleSelectionChange}
            multi
        />
    }
}

function mapStateToProps(state) {
    return {
        selectedIds: state.filter.ids
    }
}
export default connect(mapStateToProps, { setIdsFilterArticleList })(SelectFilter)