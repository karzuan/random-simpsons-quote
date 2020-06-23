import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//https://thesimpsonsquoteapi.glitch.me

const TwButton = props => {
  return (
    <a id="tweet-quote" type="button" href="twitter.com/intent/tweet" className="btn btn-sm btn-info float-left" data-show-count="false">Tweet <img alt="twitter" src="img/tw.png" width="25" /></a>
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
        <p id="text" class="lead mb-0 h2">"{this.state.quote}"</p>
        <footer id="author" class="blockquote-footer h5">{this.state.character}</footer>
        </blockquote>
        <TwButton tw="Share " />
        <button id="new-quote" type="button" className="btn btn-lg btn-success float-right" onClick={this.getRandomeQuote} >Next</button>
      </div>
    );
  }
}

ReactDOM.render(<Wrapper />, document.getElementById("quote-box"));

// Components: wrapper, buttons
// What component should be responsible for keeping state, and how should changes in state be passed on to other components?
// quotes API: https://thesimpsonsquoteapi.glitch.me/quotes