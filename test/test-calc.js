const Calc = require("../src/calc");

describe("Calculate function", () => {

	let calc = new Calc();

	test("gets 'Ivan' and should return 398", () => {
		const result = calc.hash("Ivan");

		expect(result).toEqual(398);
	});

});