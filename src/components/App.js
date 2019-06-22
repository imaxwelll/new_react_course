import React, { Component } from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DateRange from './DateRange'

class App extends Component {
    static propTypes = {

    };

    state = {
        selection: null
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <UserForm />
                <DateRange />
                <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} multi />
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }

    changeSelection = selection => this.setState({ selection })
}

export default App