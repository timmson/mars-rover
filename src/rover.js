import React from "react"
import PropTypes from "prop-types"
import {EAST} from "./directions"


export default function Rover(props) {
	const style = {
		transform: `rotate(${90 * props.position.direction}deg) scaleX(${props.position.direction === EAST ? -1 : 1})`,
		left: `${props.position.x + props.shift.x}px`,
		top: `${props.shift.y - props.position.y}px`
	}

	return (
		<div className="rover" style={style}>
			<img src="rover.png" alt="rover"/>
		</div>
	)
}

Rover.prototype.propTypes = {
	position: PropTypes.object.isRequired,
	shift: PropTypes.object.isRequired
}
