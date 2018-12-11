// шаг 1
var arr = [];

for (var i = 2; i < 100; i++) {
  arr[i] = true
}

// шаг 2
var p = 2;

	// шаг 3
  for (i = 2 * p; i < 100; i += p) {
		arr[i] = false;
	}
	console.log(arr);