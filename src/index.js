import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";

class QuizBee extends Component {
  state = {
    questionBank: [],
  };

  getQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
        <div classname="titlediv" id="titlediv">QuizBee</div>
        <div className="questionbox">
          {this.state.questionBank.length > 0 &&
            this.state.questionBank.map(({ question }) => <h3>{question}</h3>)}
            
        </div>
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));
