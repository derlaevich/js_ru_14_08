//decorator === HOC === Higher Order Component
import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {
    state = {
        openItemId: null
    }

    isOpenItem = (openItemId) => {
        console.log(this.state.openItemId == openItemId);
        return this.state.openItemId == openItemId;
    }

    toggleOpenItem = (openItemId) => {
        console.log(openItemId);
        this.setState({ openItemId });
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpenItem} isOpenItem={this.isOpenItem}/>
    }
}