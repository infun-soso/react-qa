import React from 'react'

class QuestionList extends React.Component {
    render() {
        let questions = this.props.list
        const qMap = questions.map((item) => {
            return (
                <div key={item.id}>
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                </div>
            )
        })


        return (
            <div>{qMap}</div>
        )
    }
}

export default QuestionList