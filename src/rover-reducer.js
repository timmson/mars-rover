import {FORWARD, BACKWARD, TURN_RIGHT, TURN_LEFT} from "./actions"
import {NORTH, WEST} from "./directions"
import {SPEED} from "./settings"

export default function RoverReducer(state, action) {

	switch (action) {
	case TURN_RIGHT: {
		return {
			x: state.x,
			y: state.y,
			direction: (state.direction === WEST) ? NORTH : state.direction + 1
		}

	}

	case TURN_LEFT: {
		return {
			x: state.x,
			y: state.y,
			direction: (state.direction === NORTH) ? WEST : state.direction - 1
		}

	}

	case FORWARD: {
		let dx = 0
		let dy = 0
		switch (state.direction) {
		case 0: {
			dy = SPEED
			break
		}
		case 1: {
			dx = SPEED
			break
		}
		case 2: {
			dy = -SPEED
			break
		}
		case 3: {
			dx = -SPEED
			break
		}
		}
		return {
			x: state.x + dx,
			y: state.y + dy,
			direction: state.direction
		}
	}

	case BACKWARD: {
		let dx = 0
		let dy = 0
		switch (state.direction) {
		case 0: {
			dy = -SPEED
			break
		}
		case 1: {
			dx = -SPEED
			break
		}
		case 2: {
			dy = SPEED
			break
		}
		case 3: {
			dx = SPEED
			break
		}
		}
		return {
			x: state.x + dx,
			y: state.y + dy,
			direction: state.direction
		}
	}

	default:
		return state
	}
}