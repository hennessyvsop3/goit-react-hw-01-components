import { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistic } from "./Statistic/statistic";
import IsEmptyNotification from "./notification/notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    showStat: false,
    showMessage: true,
  };

  show = () => {
    this.setState({
      showStat: true,
      showMessage: false,
    });
  };

  handleAddClickStat = (value) => {
    this.setState((prev) => ({ [value]: prev[value] + 1 }));
    // this.setState(prev => ())
  };

  totalCalc = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  positiveFeedbackCalc = () => {
    return Math.round((this.state.good / this.totalCalc()) * 100);
  };

  render() {
    return (
      <>
        <Feedback onClickBtn={this.handleAddClickStat} />
        {this.totalCalc() ? (
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalCalc={this.totalCalc()}
            positiveFeedbackCalc={this.positiveFeedbackCalc()}
          />
        ) : (
          <IsEmptyNotification/>
        )}
      </>
    );
  }
}
