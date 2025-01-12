class Car {
	#make;
	#model;
	#_run;

	constructor (make, model, run) {
		this.#make = make;
		this.#model = model;
		this.#_run = run
	}

	set run(run) {
		if (run < 0) {
            throw new Error("Пробег не может быть отрицательным.");
        }
		this.#_run = run;
	}

	get run() {
		return this.#_run;
	}

	info () {
		console.log(
			this.#make + " " + 
			this.#model + " " +
			this.#_run
		)
	}
}

const car1 = new Car ('Kia', 'Rio', '40000')

console.log(car1.info())

car1.run = '50000'

console.log(car1.info())