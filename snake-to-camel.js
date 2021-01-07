function snakeToCamel(str) {
	let arr = str.split('_');
	for (let i = 1; i < arr.length; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
	}
	return arr.join('');
}
