function starOutGrid(grid) {
	stars = [];
	for (let arr of grid) {
		if (arr.includes('*')) {
			stars.push(arr.indexOf('*'));
			for (let j = 0; j < arr.length; j++) {
				arr[j] = '*';
			}
		}
	}
	for (let idx of stars) {
		for (let arr of grid) {
			arr[idx] = '*';
		}
	}
	return grid;
}
