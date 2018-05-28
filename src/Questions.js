import React from 'react'
import './assets/css/all/index.css'
import QuestionList from './container/QuestionList'
import QuestionForm from './container/QuestionForm'

function SubmitBtn(props) {
    return (
        <button className="btn btn-success" onClick={props.onToggleForm}>添加问题</button>
    )
}

class QuestionMain extends React.Component {
    constructor() {
        const list = [
            {
                id: 1,
                title: '这是第一个问题',
                description: '问题的内容是: 1111111',
                voteCount: 10
            },
            {
                id: 2,
                title: '这是第二个问题',
                description: '问题的内容是: 2222222',
                voteCount: 13
            },
            {
                id: 3,
                title: '这是第三个问题',
                description: '问题的内容是: 33333333',
                voteCount: 4
            },
        ]
        super()
        this.state = {
            questions: list,
            formDisplay: false
        }
    }

    componentWillMount() {
        this.sortItem(this.state.questions)
    }

    onToggleForm = () => {
        this.setState({
            formDisplay:!this.state.formDisplay
        })
    }

    addNewItem(obj) {
        let olist = this.state.questions.slice()
        let len = olist.length
        let newItem = Object.assign({},{id: len + 1},obj)
        olist.push(newItem)
        this.setState({
            questions: olist
        })
    }
    onVote(id, count) {
        let items = this.state.questions.slice()
        items.map((item) => {
            if( item.id === id ) {
                item.voteCount = count
            }
            return false
        })
        items = this.sortItem(items)
        this.setState({
            questions: items
        })
    }

    sortItem(q) {
        q.sort((a, b) => {
            return b.voteCount - a.voteCount
        })
        return q
    }

    render() {
        return (
            <div className="main">
                <div className="jumbotrons text-center">
                    <h1>React问答</h1>
                    <SubmitBtn onToggleForm={this.onToggleForm}/>
                </div>
                <div className="container">
                    <div className="question-form">
                        <QuestionForm 
                            onToggleForm={this.onToggleForm} 
                            formDisplay={this.state.formDisplay}
                            addNewItem={(obj) => this.addNewItem(obj)}
                            />
                    </div>
                    <div className="question-list">
                        <QuestionList 
                            list={this.state.questions}
                            onVote={(id, count) => {this.onVote(id, count)}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionMain