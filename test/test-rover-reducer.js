import RoverReducer from "../src/rover-reducer"
import {EAST, NORTH, SOUTH, WEST} from "../src/directions"
import {FORWARD, BACKWARD, TURN_RIGHT, TURN_LEFT} from "../src/actions"
import {SPEED} from "../src/settings"

function getTestCaseDescription(i, t) {
	return `#${i}: take ${JSON.stringify(t.arrange)} and return ${JSON.stringify(t.expected)}`
}

describe("RoverReduce should", () => {


	test("do nothing", () => {
		const initialState = {state: "some state"}
		const state = RoverReducer(initialState, "unknown action")
		expect(state).toEqual(initialState)
	})

	const data = [
		{
			state: {x: 0, y: 0, direction: NORTH},
			action: TURN_RIGHT,
			expected: {x: 0, y: 0, direction: EAST}
		},
		{
			state:  {x: 0, y: 0, direction: WEST},
			action: TURN_RIGHT,
			expected:  {x: 0, y: 0, direction: NORTH}
		},
		{
			state:  {x: 0, y: 0, direction: EAST},
			action: TURN_LEFT,
			expected:  {x: 0, y: 0, direction: NORTH}
		},
		{
			state:  {x: 0, y: 0, direction: NORTH},
			action: TURN_LEFT,
			expected:  {x: 0, y: 0, direction: WEST}
		},
		{
			state:  {x: 0, y: 0, direction: NORTH},
			action: FORWARD,
			expected:  {x: 0, y: SPEED, direction: NORTH}
		},
		{
			state:  {x: 0, y: 0, direction: NORTH},
			action: BACKWARD,
			expected:  {x: 0, y: -SPEED, direction: NORTH}
		},
		{
			state:  {x: 0, y: 0, direction: EAST},
			action: FORWARD,
			expected:  {x: SPEED, y: 0, direction: EAST}
		},
		{
			state:  {x: 0, y: 0, direction: EAST},
			action: BACKWARD,
			expected:  {x: -SPEED, y: 0, direction: EAST}
		},
		{
			state:  {x: 0, y: 0, direction: SOUTH},
			action: FORWARD,
			expected:  {x: 0, y: -SPEED, direction: SOUTH}
		},
		{
			state:  {x: 0, y: 0, direction: SOUTH},
			action: BACKWARD,
			expected:  {x: 0, y: SPEED, direction: SOUTH}
		},
		{
			state:  {x: 0, y: 0, direction: WEST},
			action: FORWARD,
			expected:  {x: -SPEED, y: 0, direction: WEST}
		},
		{
			state:  {x: 0, y: 0, direction: WEST},
			action: BACKWARD,
			expected:  {x: SPEED, y: 0, direction: WEST}
		}
	]

	data.forEach(
		(t, i) =>
			test(getTestCaseDescription(i, t), () => {
				const state = RoverReducer(t.state, t.action)
				expect(state).toEqual(t.expected)
			}
			)
	)

})