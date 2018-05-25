import React from 'react'

class ListItem extends React.Component {
	  voteUp() {
			const newVote = parseInt(this.props.voteCount + 1, 10)
			this.props.onVote(this.props.questionId, newVote)
		}

		voteDown() {
			const newVote = parseInt(this.props.voteCount - 1, 10)
			this.props.onVote(this.props.questionId, newVote)
		}

    render() {
        return (
            <li>
                <div className="media-left">
	              <button className="btn btn-default" onClick={() => {this.voteUp()}}>
	                <span className="glyphicon glyphicon-chevron-up"></span>
	                <span className="vote-count">{this.props.voteCount}</span>
	              </button>
	              <button className="btn btn-default" onClick={this.voteDown.bind(this)}>
	                <span className="glyphicon glyphicon-chevron-down"></span>
	              </button>
	            </div>
	            <div className="media-body">
	              <h4 className="media-heading">{this.props.title}</h4>
	              <p>{this.props.description}</p>
	            </div>
            </li>
        )
    }
}

export default ListItem