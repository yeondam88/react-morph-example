import React from "react";
import Button from "./Button";

const TextBox = props => (
  <div id="blip">
    <h1>Woosh! That morphed!</h1>
    <p>
      Isn't it cool? Here's a little more text to know that what AnimeJS can do
      to your webpage.
    </p>
    <p>
      Get this awesome JavaScript library{" "}
      <a
        href="http://animejs.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        here
      </a>
    </p>

    <Button clicked={props.closed} styleId="cta2">
      Go Back
    </Button>
  </div>
);

export default TextBox;
