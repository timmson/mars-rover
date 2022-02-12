import RoverReducer from "../src/rover-reducer"
import {EAST, NORTH, SOUTH, WEST} from "../src/directions"
import {FORWARD, BACKWARD, TURN_RIGHT, TURN_LEFT} from "../src/actions"
import {SPEED} from "../src/settings"

describe("RoverReduce should", () => {


	const testCases = [
		[
			"some action",
			"some state",
			"some state"
		],
		[
			TURN_RIGHT,
			{x: 0, y: 0, direction: NORTH},
			{x: 0, y: 0, direction: EAST}
		],
		[
			TURN_RIGHT,
			{x: 0, y: 0, direction: WEST},
			{x: 0, y: 0, direction: NORTH}
		],
		[
			TURN_LEFT,
			{x: 0, y: 0, direction: EAST},
			{x: 0, y: 0, direction: NORTH}
		],
		[
			TURN_LEFT,
			{x: 0, y: 0, direction: NORTH},
			{x: 0, y: 0, direction: WEST}
		],
		[
			FORWARD,
			{x: 0, y: 0, direction: NORTH},
			{x: 0, y: SPEED, direction: NORTH}
		],
		[
			BACKWARD,
			{x: 0, y: 0, direction: NORTH},
			{x: 0, y: -SPEED, direction: NORTH}
		],
		[
			FORWARD,
			{x: 0, y: 0, direction: EAST},
			{x: SPEED, y: 0, direction: EAST}
		],
		[
			BACKWARD,
			{x: 0, y: 0, direction: EAST},
			{x: -SPEED, y: 0, direction: EAST}
		],
		[
			FORWARD,
			{x: 0, y: 0, direction: SOUTH},
			{x: 0, y: -SPEED, direction: SOUTH}
		],
		[
			BACKWARD,
			{x: 0, y: 0, direction: SOUTH},
			{x: 0, y: SPEED, direction: SOUTH}
		],
		[
			FORWARD,
			{x: 0, y: 0, direction: WEST},
			{x: -SPEED, y: 0, direction: WEST}
		],
		[
			BACKWARD,
			{x: 0, y: 0, direction: WEST},
			{x: SPEED, y: 0, direction: WEST}
		]
	]

	test.each(testCases)("take %s and return %s", (action, arrange, expected) => {
		const actual = RoverReducer(arrange, action)
		expect(actual).toEqual(expected)
	})


})