import React from "react"
import {EAST} from "./directions"

type RoverProps = {
	position: {
		x: number,
		y: number,
		direction: number
	}
	shift: {
		x: number,
		y: number,
	}
}

export default function Rover(props: RoverProps) {
	const style = {
		transform: `rotate(${90 * props.position.direction}deg) scaleX(${props.position.direction === EAST ? -1 : 1})`,
		left: `${props.position.x + props.shift.x}px`,
		top: `${props.shift.y - props.position.y}px`
	}

	return (
		<div className="rover" style={style}>
			<img src="img/rover.png" alt="rover"/>
		</div>
	)
}
