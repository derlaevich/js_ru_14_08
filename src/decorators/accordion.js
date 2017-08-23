//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {
    state = {
        openItemId: null
    }

    isOpenItem = (openItemId) => {
        return this.state.openItemId == openItemId;
    }

    toggleOpenItem = (openItemId) => {
        this.setState({ openItemId: this.state.openItemId != openItemId ? openItemId : null });
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpenItem} isOpenItem={this.isOpenItem}/>
    }
}