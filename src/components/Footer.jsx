import React from "react";
import ReactDOM from "react-dom";

function Footer(props) {
  return (
    <div class="jumbotron  bg-info ">
      <div class="card-header">
        copyright @ &nbsp;
        <a href="https://github.com/NaveenKumarSA">Naveen Kumar S A</a>
      </div>
      <div class="card-body">
        <h4 class="card-title">Application Summary</h4>
        <h5>Front End - React.js </h5>

        <h5>libraries used - Bootstrap</h5>
        <div class=" center">
          <a href="https://naveenkumarsa.github.io/" class="btn btn-info">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Footer />, document.getElementById("footer"));
