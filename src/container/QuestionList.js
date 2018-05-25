import React from 'react'
import ListItem from '../components/ListItem'

class QuestionList extends React.Component {
    render() {
        let questions = this.props.list
        const qMap = questions.map((item) => {
            return (
                <ListItem 
                    key={item.id}
                    questionId={item.id}
                    title={item.title}
                    voteCount={item.voteCount}
                    description={item.description}
                    onVote={this.props.onVote}/>
            )
        })


        return (
            <ul className="list-style">{qMap}</ul>
        )
    }
}

export default QuestionList