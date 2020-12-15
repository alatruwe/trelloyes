import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import List from "./List.js";

// smoke test
describe("List component", () => {
  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // snapshot test
  it("renders the UI as expected", () => {
    const tree = renderer.create(<List />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/* Note: if your test for the List component fails 
examine the error message carefully. 
What is the component expecting as a prop? 
How can you invoke the component with the required prop in your test?*/
