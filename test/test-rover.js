import React from "react"
import renderer from "react-test-renderer"

import Rover from "../src/rover"

describe("Rover should", () => {
	
	test("render at (0,0) and have direction to east", () => {
		const component = renderer.create(<Rover position={{x: 0, y:0, direction: 1}} shift={{x:0, y:0}}/>)
		expect(component.toJSON()).toMatchSnapshot()
		component.unmount()
	})
	
})