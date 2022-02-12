import {BACKWARD, FORWARD, TURN_LEFT, TURN_RIGHT} from "./actions"
import {NORTH, WEST} from "./directions"
import {SPEED} from "./settings"

function turn(state, clockwise) {
	let newDirection = state.direction + clockwise
	if (newDirection < NORTH) newDirection = WEST
	if (newDirection > WEST) newDirection = NORTH
	return {
		...state,
		direction: newDirection
	}
}

function move(state, speed) {
	const [positive, leftOrRight] = (state.direction >>> 0).toString(2).padStart(2, "0").split("")
	const isX = (leftOrRight === "1")

	const d = (positive === "0" ? speed : -speed)
	return {
		...state,
		x: state.x + (isX ? d : 0),
		y: state.y + (!isX ? d : 0)
	}
}

export default function RoverReducer(state, action) {

	switch (action) {
	case TURN_RIGHT:
		return turn(state, 1)

	case TURN_LEFT:
		return turn(state, -1)

	case FORWARD:
		return move(state, SPEED)

	case BACKWARD:
		return move(state, -SPEED)

	default:
		return state
	}
}