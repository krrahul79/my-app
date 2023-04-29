//component means creating a function
//export component to use it
//We can have multiple components but only one root component
//root component is only one
//always selfclose the react component while rendering
import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return (
    <h2 id="something" className="classheading">
      Hi! How are you
    </h2>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
