import React from 'react'
import './assets/css/all/index.css'
import QuestionList from './QuestionList'

function SubmitBtn(props) {
    return (
        <button>添加问题</button>
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
            questions: list
        }
    }
    render() {
        return (
            <div className="main">
                <div className="jumbotron">
                    <h1>React问答</h1>
                    <SubmitBtn />
                </div>
                <div className="container">
                    <div className="question-form">1</div>
                    <div className="question-list">
                        <QuestionList list={this.state.questions}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionMain