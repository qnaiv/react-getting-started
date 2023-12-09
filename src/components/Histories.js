export default function Histories({ history, onJump }) {

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move}>
        <button onClick={() => onJump(move)}>{description}</button>
      </li>
    );
  });

  return <ol>{moves}</ol>
};