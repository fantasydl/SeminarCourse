window.onload = function(){
	var area = document.getElementById("scrollBox"),
		con1 = document.getElementById("con1"),
		con2 = document.getElementById("con2");

	con2.innerHTML = con1.innerHTML;

	var time = 50;
	var scrollUp = setInterval(scrollTop,time);

	function scrollTop(){
		if(area.scrollTop >= con1.offsetHeight){
			area.scrollTop = 0;
		}else{
			area.scrollTop++;
		}
	}

	area.onmouseover = scrollStop;
	area.onmouseout = scrollRestart;

	function scrollStop(){
		clearInterval(scrollUp);
	}

	function scrollRestart(){
		scrollUp = setInterval(scrollTop,time);
	}
}