import React from 'react'

class QuestionForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault()
        if(this.title.value === '' || this.description.value === '') {
            alert('不要调戏我哦~')
            return
        }
        const newItem = {
            title: this.title.value,
            description: this.description.value,
            voteCount: 0
        }
        this.refs.form.reset()
        this.props.addNewItem(newItem)
    }

    componentDidUpdate() {
        this.title.focus()
        this.refs.form.reset()
    }

    render() {

        const showForm = {
            display:this.props.formDisplay ? 'block' : 'none'
        }

        return (
            <form className="form-box" ref="form" onSubmit={this.handleSubmit.bind(this)} style={showForm}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" ref={(title) => {this.title = title}} className="form-control" id="exampleInputEmail1" placeholder="please enter some words" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <textarea ref={(description) => {this.description = description}} className="form-control"  id="exampleInputPassword1" placeholder="something to ask" />
                </div>
                <button type="submit" className="btn btn-success" >Submit</button>
                <button type="button" className="btn btn-default cancelbtn" onClick={this.props.onToggleForm}>cancel</button>
            </form>
        )
    }
}

export default QuestionForm