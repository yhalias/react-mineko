import React, {Component} from 'react'
import {connect} from 'react-redux'
import Article from './Article'

class ArticleList extends Component {
    showArticleList() {
        return this.props.articles.map((article) => {
            return (
                <li key={article.id}>
                    <Article article={article}/>
                </li>
            )
        })
    }

    render() {
        return (
            <ul>
                {this.showArticleList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(ArticleList)