import React from "react"
import renderer, {act} from "react-test-renderer"

import App from "../src/app"


const mockWindow = {
	addEventListener: () => {
	}
}

const mockDocument = {
	documentElement: {
		clientWidth: 0,
		clientHeight: 0
	}
}


describe("App should", () => {

	test("render", () => {
		let component
		act(() => {
			component = renderer.create(<App window={mockWindow} document={mockDocument}/>)
		})
		expect(component.toJSON()).toMatchSnapshot()
		component.unmount()
	})

})