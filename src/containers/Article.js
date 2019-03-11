import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {openArticle} from '../actions/index'
import Design from '../../node_modules/mineko-design/src/icons/index'


class Article extends Component{

    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }

        // this.handleClick = handleClick.bind(this);
    }

    // stage-3 code TODO:: research compile
    // state = {
    //     isOpen: false
    // }

    render(){
        const {article} = this.props

        const body = this.state.isOpen && <section> {article.text} </section>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={() => this.props.openArticle(article)}>
                        {this.state.isOpen ? 'Close' : 'Open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date).toDateString())}</h3>
            </div>
        )
    }

    // handleClick = () => {
    //     console.log('clicked')
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     })
    // }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({openArticle: openArticle}, dispatch)
}

// function handleClick() {
//     this.setState({
//         isOpen: !this.state.isOpen
//     })
// }

export default connect(null, matchDispatchToProps)(Article)