import React, { Component } from "react";
import anime from "animejs";

import Button from "./Button";
import TextBox from "./TextBox";

class App extends Component {
  state = {
    open: false
  };

  initMorph = () => {
    anime({
      targets: ".polymorph",
      points: [
        { value: "215, 110 0, 110 0, 0 47.7, 0 67, 76" },
        { value: "215, 110 0, 110 0, 0 0, 0 67, 76" }
      ],
      easing: "easeOutQuad",
      duration: 1200,
      loop: false
    });

    this.setState(
      {
        open: true
      },
      () => {
        this.showMessage();
      }
    );
  };

  showMessage = () => {
    anime({
      targets: "#blip",
      opacity: 1,
      duration: 1000,
      translateY: 150
    });
  };

  hideMessage = () => {
    this.setState(
      {
        open: false
      },
      () => {
        anime({
          targets: "#blip",
          opacity: 0,
          duration: 800,
          translateY: -800
        });

        anime({
          targets: ".polymorph",
          points: [
            { value: "215, 110 0, 110 0, 0 47.7, 0 67, 76" },
            { value: "215,110 0,110 0,0 49.3,0 215,0" }
          ],
          easing: "easeOutQuad",
          duration: 1200,
          loop: false
        });
      }
    );
  };

  render() {
    return (
      <div>
        <Button styleId="cta" clicked={this.initMorph}>
          Click Me
        </Button>
        <svg viewBox="0 0 215 110">
          <polygon
            className="polymorph"
            points="215,110 0,110 0,0 49.3,0 215,0"
          />
        </svg>
        <TextBox closed={this.hideMessage} />
      </div>
    );
  }
}

export default App;
