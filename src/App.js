import React from "react";
import "./styles.css";

function MovieItem(props) {
  console.log("props = ", props);
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.vote_average}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MovieItem title="Title new" vote_average={10.0} />
    </div>
  );
}
