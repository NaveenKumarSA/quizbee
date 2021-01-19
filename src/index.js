import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Footer from "./components/Footer";

class QuizBee extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };
  // get question is a method to set questions in a qustion bank array
  getQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };
  //this is the code for computing the correct answers and increase the score by one
  computeAnswer = (answer, correct) => {
    if (answer === correct) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };
  //play again
  playAgain = () => {
    this.getQuestions();
    this.setState({ score: 0, responses: 0 });
  };
  // component .did mount is to bring the questions from the qusetion bank
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container bg-lime">
        <div classname="titlediv" id="titlediv">
          QuizBee
        </div>
        <div className="questionbox">
          {this.state.questionBank.length > 0 &&
            this.state.responses < 5 &&
            this.state.questionBank.map(
              ({ question, answers, correct, questionId }) => (
                <QuestionBox
                  question={question}
                  options={answers}
                  key={questionId}
                  selected={(answer) => this.computeAnswer(answer, correct)}
                />
              )
            )}

          {this.state.responses === 5 ? (
            <Result score={this.state.score} playAgain={this.playAgain} />
          ) : null}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));
