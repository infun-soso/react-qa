import React from 'react'

class Board extends React.Component {

    renderSquare (i) {
        return (<Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>)
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

function Square(props) {
    return (    
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for(let i = 0; i < lines.length; i++){
        let [a, b, c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null
}

class Game extends React.Component {

    constructor() {
        super()
        this.state = {
            history: [{
                square: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        console.log(history)
        const current = history[history.length - 1]
        const squares = current.square.slice()
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                square: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        })
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true
        })
    }

    render() {
        const history = this.state.history
        console.log(history,2)
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.square)

        const moves = history.map((step, move) => {
            const desc = move ? 
                'Move #' + move :
                'Game start'
            return (
                <li key={move}>
                    <a href="###" onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            )
        })

        let status
        if (winner) {
            status = 'Winner: ' + winner
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        }
        return (
            <div className="game">
                <Board squares={current.square} onClick={(i) => this.handleClick(i)}/>
                <div>
                    <div className="status">{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }
}

export default Game