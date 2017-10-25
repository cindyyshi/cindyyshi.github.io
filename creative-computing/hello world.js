var now = new Date ()
var seconds = now.getSeconds ()
var minutes = now.getMinutes ()
console.log  (seconds)

if (seconds < 10  && minutes> 40) {
	console.log (1)
} else {
	console.log (2)
}
