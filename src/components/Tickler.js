import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }

  return <button> on click={tickle}Tickle me!</button>;
}

export default Tickler;
