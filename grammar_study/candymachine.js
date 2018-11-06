var candyMachine = {
	status: {
		name: 'node',
		count: 5,
	},
	getCandy() {
		this.status.count--;
		return this.status.count;
	}
};

var getCandy = candyMachine.getCandy();
console.log(getCandy);
var count = candyMachine.status.count;
console.log(count);
