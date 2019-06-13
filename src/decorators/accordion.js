import React, {Component as ReactComponent} from 'react'

export default Component => class Accordion extends ReactComponent {
    state = {
        openArticleId: null
    }

    render() {
        return <Component {...this.props} toggleOpenArticle = {this.toggleOpenArticle} openArticleId = {this.state.openArticleId} />
    }

    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    toggleOpenArticle = openArticleId => ev => {
        this.setState({
            openArticleId: openArticleId === this.state.openArticleId ? null : openArticleId
        })
    }
}