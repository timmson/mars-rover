import RoverReducer from "../src/rover-reducer"
import {EAST, NORTH, SOUTH, WEST} from "../src/directions"
import {FORWARD, BACKWARD, TURN_RIGHT, TURN_LEFT} from "../src/actions"
import {SPEED} from "../src/settings"

const getTestCaseDescription = (i, t) =>
	`#${i}: return ${JSON.stringify(t.expected)} when state:${JSON.stringify(t.state)} and action:${JSON.stringify(t.action)}`


describe("RoverReduce should", () => {

	[
		{
			state: "some state",
			acton: "unknown action",
			expected: "some state"
		},
		{
			state: {x: 0, y: 0, direction: NORTH},
			action: TURN_RIGHT,
			expected: {x: 0, y: 0, direction: EAST}
		},
		{
			state: {x: 0, y: 0, direction: WEST},
			action: TURN_RIGHT,
			expected: {x: 0, y: 0, direction: NORTH}
		},
		{
			state: {x: 0, y: 0, direction: EAST},
			action: TURN_LEFT,
			expected: {x: 0, y: 0, direction: NORTH}
		},
		{
			state: {x: 0, y: 0, direction: NORTH},
			action: TURN_LEFT,
			expected: {x: 0, y: 0, direction: WEST}
		},
		{
			state: {x: 0, y: 0, direction: NORTH},
			action: FORWARD,
			expected: {x: 0, y: SPEED, direction: NORTH}
		},
		{
			state: {x: 0, y: 0, direction: NORTH},
			action: BACKWARD,
			expected: {x: 0, y: -SPEED, direction: NORTH}
		},
		{
			state: {x: 0, y: 0, direction: EAST},
			action: FORWARD,
			expected: {x: SPEED, y: 0, direction: EAST}
		},
		{
			state: {x: 0, y: 0, direction: EAST},
			action: BACKWARD,
			expected: {x: -SPEED, y: 0, direction: EAST}
		},
		{
			state: {x: 0, y: 0, direction: SOUTH},
			action: FORWARD,
			expected: {x: 0, y: -SPEED, direction: SOUTH}
		},
		{
			state: {x: 0, y: 0, direction: SOUTH},
			action: BACKWARD,
			expected: {x: 0, y: SPEED, direction: SOUTH}
		},
		{
			state: {x: 0, y: 0, direction: WEST},
			action: FORWARD,
			expected: {x: -SPEED, y: 0, direction: WEST}
		},
		{
			state: {x: 0, y: 0, direction: WEST},
			action: BACKWARD,
			expected: {x: SPEED, y: 0, direction: WEST}
		}
	].map((t, i) =>
		test(getTestCaseDescription(i, t), () => {
			const state = RoverReducer(t.state, t.action)
			expect(state).toEqual(t.expected)
		}
		)
	)

})