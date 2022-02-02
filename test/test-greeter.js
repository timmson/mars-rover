const React = require("react");
const renderer = require("react-test-renderer");

const Greeter = require("../src/greeter");

class MockCalc {

	hash() {
		return 0;
	}

}

describe("Greeter should", () => {

	test("return greeting", () => {
		const component = renderer.create(
			<Greeter calc={new MockCalc()}/>
		);
		expect(component.toJSON()).toMatchSnapshot();
		component.unmount();
	});
});