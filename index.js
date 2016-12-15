const systems = require('./systems');

class Recognizer {
	constructor() {
		this.systems = systems;
	}

	recognize(str) {
		if (typeof(str) !== "string") {
			throw new Error("provided input is not a string.");
		}

		return this.systems.filter((sys) => {
			return str.search(sys.regex) >= 0;
		}).map(sys => sys.name);
	}
}

module.exports = new Recognizer();