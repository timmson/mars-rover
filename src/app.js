import React, {useEffect, useReducer} from "react"
import PropTypes from "prop-types"

import Rover from "./rover"
import RoverReducer from "./rover-reducer"
import {EAST} from "./directions"

export default function App(props) {

	const window = props.window
	//const document = props.window

	let roverWith = 128
	let roverHeight = 128
	const shift = {
		x: (document.documentElement.clientWidth - roverWith) / 2,
		y: (720 - roverHeight) / 2
	}

	const initState = {x: 0, y: 0, direction: EAST}
	const [state, dispatch] = useReducer(RoverReducer, initState, () => initState)

	useEffect(() => {
		const keyHandler = (event) => dispatch(event.key)
		window.addEventListener("keypress", keyHandler)
		return () => window.removeEventListener("keypress", keyHandler)
	}, [window])

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light container mb-5">
				<div className="row w-50">
					<div className="col-3 text-center">
						Control:&nbsp;<img src="wasd.png" alt="wasd"/>
					</div>
					<div className="col-9 text-center">
						<p>Tracking: {state.direction}, [{state.x},{state.y}]</p>
					</div>
				</div>
			</nav>
			<Rover position={state} shift={shift}/>
			<div className="container mars" style={{background: "url(bg.png)"}}>
				<div className="row" style={{height: "300px"}}>
					<div className="col-6 border border-1 border-dark text-start align-text-bottom">

					</div>
					<div className="col-6 border border-1 border-dark text-start align-text-top">

					</div>
				</div>
				<div className="row" style={{height: "300px"}}>
					<div className="col-6 border border-1 border-dark text-end align-text-bottom">

					</div>
					<div className="col-6 border border-1 border-dark text-end align-text-top">

					</div>
				</div>
			</div>
		</>
	)
}

App.prototype.propTypes = {
	window: PropTypes.object.isRequired
}

