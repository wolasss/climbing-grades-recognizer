const chai = require('chai');
const expect = chai.expect;
const Recogniser = require('./index.js');

const gradeOkTester = (system) => {
	return (grade) => {
		const systems = Recogniser.recognize(grade);
		return expect(systems).to.include(system);
	};
};

const gradeFailTester = (system) => {
	return (grade) => {
		const systems = Recogniser.recognize(grade);
		return expect(systems).not.to.include(system);
	};
};

describe("Wrong input", () => {
	it("should throw an error when provided input is not a string", () => {
		expect(() => {
			Recogniser.recognize(6)
		}).to.throw(Error);

		expect(() => {
			Recogniser.recognize([6])
		}).to.throw(Error);

		expect(() => {
			Recogniser.recognize(null)
		}).to.throw(Error);

		expect(() => {
			Recogniser.recognize(undefined)
		}).to.throw(Error);
	});

	it("should return an empty array when the system is not recognized", () => {
		expect(Recogniser.recognize("aaa")).to.be.an.Array;
		expect(Recogniser.recognize("aaa").length).to.be.equal(0);

		expect(Recogniser.recognize("")).to.be.an.Array;
		expect(Recogniser.recognize("").length).to.be.equal(0);
	});
});

describe("YDS System", () => {
	it("should properly recognize valid YDS grades 5.0 to 5.9", () => {
		const test = gradeOkTester('yds');
		test("5.0");
		test("5.1");
		test("5.2");
		test("5.3");
		test("5.4");
		test("5.5");
		test("5.6");
		test("5.7");
		test("5.8");
		test("5.9");
	});

	it("should properly recognize valid YDS grades 5.10 to 5.15", () => {
		const test = gradeOkTester('yds');
		test("5.10");
		test("5.10a");
		test("5.10b");
		test("5.11a");
		test("5.11b");
		test("5.11c");
		test("5.11d");
		test("5.12a");
		test("5.12b");
		test("5.12c");
		test("5.12d");
		test("5.13a");
		test("5.13b");
		test("5.13c");
		test("5.13d");
		test("5.14a");
		test("5.14b");
		test("5.14c");
		test("5.14d");
		test("5.15a");
		test("5.15b");
		test("5.15c");
		test("5.15d");
	});

	it("should not recognize not valid YDS grades", () => {
		const test = gradeFailTester('yds');
		test("6");
		test("5");
		test("6.2");
		test("5.1a");
		test("5.2a");
		test("5.9a");
		test("5.a");
		test("1.0");
		test("5.10e");
		test("5.16a");
		test("5.17d");
	})
});