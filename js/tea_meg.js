window.onload = function(){
	var aThis = getElementsByClass('answerThis','main');
	for(var i = 0,l = aThis.length;i < l;i++){
		aThis[i].onclick = rThis;
	}

	var dThis = getElementsByClass('deleteThis','main');
	for(var i = 0,l = dThis.length;i < l;i++){
		dThis[i].onclick = cThis;
	}
}

function getElementsByClass(clsName,parent){
  var oParent = parent ? document.getElementById(parent) : document,
  	  eles = [],
      elements = oParent.getElementsByTagName('*');

  for(var i = 0,l = elements.length;i < l;i++){
    if(elements[i].className == clsName){
      eles.push(elements[i]);
    }
  }
  return eles;
}

function rThis(event){
	event = event || window.event;
	var target = event.target || event.srcElement,
		aText = document.getElementById("ansText"),
		val = target.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML;
	aText.value = "回复" + val + "：";
	if(checkScrollH()){
		var clientH = document.documentElement.clientHeight,
			scrollH = document.body.scrollHeight,
			targetH = scrollH - clientH - 3;
		scrollUp(targetH);
	}
}

function checkScrollH(){
	var clientH = document.documentElement.clientHeight + document.body.scrollTop,
		scrollH = document.body.offsetHeight;
	return scrollH > clientH ? true : false;
}

function scrollUp(targeth){
	clearInterval(timer);
	var target = document.body;
	var timer = setInterval(function(){
		if(target.scrollTop >= targeth){
			clearInterval(timer);
		}else{
			target.scrollTop += 15;
		}
		
	},7)
}

function cThis(event){
	event = event || window.event;
	var target = event.target || event.srcElement,
		mMain = document.getElementById('main'),
		floor = target.parentNode;

	mAnimate(floor,{height:0,opacity:0});

	setTimeout(function(){
		mMain.removeChild(floor);
	},250);
}