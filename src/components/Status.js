export default function Status({ winner, xIsNext }) {
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return <div className="status">{status}</div>;
}