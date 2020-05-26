import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//https://thesimpsonsquoteapi.glitch.me

const TwButton = props => {
  return (
    <button type="button" className="btn btn-lg btn-info float-left" href="https://twitter.com/intent/tweet" id="tweet-quote">
      {props.tw}<img alt="twitter" src="img/tw.png" width="25" />
    </button>
  );
};

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      character: ""
    };
  }

  componentDidMount() {
    this.getRandomeQuote();
  }

  getRandomeQuote = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(res => res.json())
      .then(result => {
        this.setState({
          quote: result[0].quote,
          character: result[0].character
        });
      })
      .catch(error => console.log("error message: " + error));
  };

  render() {
    return (
      <div>
      <blockquote class="blockquote text-center"> 
        <p class="lead mb-0 h2">"{this.state.quote}"</p>
        <footer class="blockquote-footer h5">{this.state.character}</footer>
        </blockquote>
        <TwButton tw="Share " />
        <button type="button" className="btn btn-lg btn-success float-right" onClick={this.getRandomeQuote} >Next</button>
      </div>
    );
  }
}

ReactDOM.render(<Wrapper />, document.getElementById("quote-box"));

// Components: wrapper, buttons
// What component should be responsible for keeping state, and how should changes in state be passed on to other components?
// quotes API: https://thesimpsonsquoteapi.glitch.me/quotes
