const $circle = $(".circle");
const	$wrap = $(".wrapper");
const	w = window.innerWidth;
const	h = window.innerHeight;

function random(min, max) {
	return (Math.random() * (max - min)) + min;
}

$circle.each(function(i){
	
	let x = random(0, w);
	let	y = random(0, h);
	let	z = random(-1000, -200);
  let	color = "hsla("+i * 1.8+", 80%, 50%, 1)";
  let	size = random(2, 30);
  let	circle = $(this);
	
	circle.css({
		background: color,
		height: size,
		width: size,
		borderRadius: "50%",
		boxShadow: "0 0 "+size+"px " + color
	})
	
	TweenMax.fromTo(circle, 3, {
    opacity: 0,
    x: x,
    y: y,
    z: z
  }, {
			opacity: 1,
			z: 500,
			repeat: -1,
			delay: i * -.015
	});
  	
});

function touches(e) {
  let x = 0;
  let y = 0;
  if(e.touches) {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  }
  else {
    x = e.clientX;
    y = e.clientY;
  }
	
	TweenMax.to($wrap, 1, {
		webkitPerspectiveOrigin: x + "px " + y +"px",
		perspectiveOrigin: x + "px " + y +"px"
	});
}



window.addEventListener("mousemove", touches);
window.addEventListener("touchstart", touches);
window.addEventListener("touchmove", touches);
window.addEventListener("click", speed);