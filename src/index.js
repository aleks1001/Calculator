import React from "react";
import { render } from "react-dom";
import Hello from "./components/Hello";
import Button from "./components/Button";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
  flexWrap: "wrap"
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sumOfNumbers: 0
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(value) {
    switch (value.toString()) {
      case "AC":
        this.setState({
          sumOfNumbers: 0
        });
        break;
      case "=":
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        this.setState({
          sumOfNumbers:
            this.state.sumOfNumbers === 0
              ? value
              : this.state.sumOfNumbers + value.toString()
        });
        break;
      default:
        console.log(value);
    }
  }

  render() {
    return (
      <div style={{ width: "360px" }}>
        <Hello name={this.state.sumOfNumbers} />
        <div style={styles}>
          {[1, 2, 3, "/", 4, 5, 6, "*", 7, 8, 9, "-", 0, "AC", "=", "+"].map(
            (number, i) => (
              <Button
                key={`button-${i}`}
                handleClick={this.handleButtonClick}
                buttonText={number}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

render(<Calculator />, document.getElementById("root"));
