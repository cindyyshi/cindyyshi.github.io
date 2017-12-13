document.addEventListener("mousemove", handleMouseMove)

function handleMouseMove (evt) {
	var x = (evt.pageX / window,innerWidth) *
	255
	var y = (evt.pageY / window.innerHeight) *
	255

	x = Math.round(x)
	y = Math.round(x)

	console.log(x,y)

document.body.style.backgroundColor ="rgb(" + x,y,255)"
}
	