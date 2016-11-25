import React from 'react';
import styles from './app.css'

class Square extends React.Component {
    render() {
        return (
            <button className={styles.square} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
    }

    render() {
        return (
            <div>
                <div className={styles.status}>{status}</div>
                <div className={styles.boardRow}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={styles.boardRow}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={styles.boardRow}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            turn: 0,
            stepNumber: 0,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[this.state.stepNumber];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.turn ? 'O' : 'X';
        this.setState({
            history: history.concat([
                {squares: squares},
            ]),
            turn: !this.state.turn,
            stepNumber: history.length,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            turn: (step % 2) ? 1 : 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        let status = 'Next player: ' + (this.state.turn ? 'O' : 'X');
        if (winner) {
            status = 'Winner: ' + winner;
        }

        const moves = history.map((step, move) => {
            const desc = move ? 'Move #' + move : 'Game start';
            return (
                <li key={move}><a href='#' onClick={() => this.jumpTo(move)}>{desc}</a></li>
            );
        });
        return (
            <div className={styles.game}>
                <div className='game-board'>
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className={styles.gameInfo}>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default React.createClass({
    render() { return <Game />; }
})

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
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
