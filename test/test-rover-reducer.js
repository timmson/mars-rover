import RoverReducer from "../src/rover-reducer"
import {EAST, NORTH, SOUTH, WEST} from "../src/directions"
import {FORWARD, BACKWARD, TURN_RIGHT, TURN_LEFT} from "../src/actions"
import {SPEED} from "../src/settings"

describe("RoverReduce should", () => {


	test("do nothing", () => {
		const initialState = {state: "some state"}
		const state = RoverReducer(initialState, "unknown action")
		expect(state).toEqual(initialState)
	})

	const data = [
		{
			arrange: {state: {x: 0, y: 0, direction: NORTH}, action: TURN_RIGHT},
			expected: {state: {x: 0, y: 0, direction: EAST}}
		},
		{
			arrange: {state: {x: 0, y: 0, direction: WEST}, action: TURN_RIGHT},
			expected: {state: {x: 0, y: 0, direction: NORTH}}
		},
		{
			arrange: {state: {x: 0, y: 0, direction: EAST}, action: TURN_LEFT},
			expected: {state: {x: 0, y: 0, direction: NORTH}}
		},
		{
			arrange: {state: {x: 0, y: 0, direction: NORTH}, action: TURN_LEFT},
			expected: {state: {x: 0, y: 0, direction: WEST}}
		},
		{
			arrange: {state: {x: 0, y: 0, direction: NORTH}, action: FORWARD},
			expected: {state: {x: 0, y: SPEED, direction: NORTH}}
		},
		{
			arrange: {state: {x: 0, y: 0, direction: NORTH}, action: BACKWARD},
			expected: {state: {x: 0, y: -SPEED, direction: NORTH}}
		},
		{
			arrange: {state: {x: 0, y: 0, direction: EAST}, action: FORWARD},
			expected: {state: {x: SPEED, y:0 , direction: EAST}}
		},
		{
			arrange: {state: {x: 0, y: 0, direction: EAST}, action: BACKWARD},
			expected: {state: {x: -SPEED, y: 0, direction: EAST}}
		},
		{
			arrange: {state: {x: 0, y: 0, direction: SOUTH}, action: FORWARD},
			expected: {state: {x: 0, y: -SPEED, direction: SOUTH}}
		},
		{
			arrange: {state: {x: 0, y: 0, direction: SOUTH}, action: BACKWARD},
			expected: {state: {x: 0, y: SPEED, direction: SOUTH}}
		},
		{
			arrange: {state: {x: 0, y: 0, direction: WEST}, action: FORWARD},
			expected: {state: {x: -SPEED, y:0 , direction: WEST}}
		},
		{
			arrange: {state: {x: 0, y: 0, direction: WEST}, action: BACKWARD},
			expected: {state: {x: SPEED, y: 0, direction: WEST}}
		}
	]

	data.forEach(
		(tc) =>
			test(`take ${JSON.stringify(tc.arrange)} and return ${JSON.stringify(tc.expected)}`, () => {
				const state = RoverReducer(tc.arrange.state, tc.arrange.action)
				expect(state).toEqual(tc.expected.state)
			}
			)
	)

})