import "./index.scss"
import "bootstrap"

import React from "react"
import ReactDOM from "react-dom"
import App from "./app"

ReactDOM.render(<App window={window} document={document}/>, document.getElementById("app"))