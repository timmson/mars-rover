require("./index.scss");
require("bootstrap");

const React = require("react");
const ReactDOM = require("react-dom");

const Greeter = require("./greeter");
const Calc = require("./calc");

ReactDOM.render(<Greeter calc={new Calc()}/>, document.getElementById("app"));