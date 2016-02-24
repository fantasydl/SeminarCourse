window.onload = function(){
	var aThis = getElementsByClass('answerThis','main');
	for(var i = 0,l = aThis.length;i < l;i++){
		aThis[i].onclick = rThis;
	}
	var newFloor = document.getElementById('newFloor');
	newFloor.onclick = function(event){
		event.preventDefault();
		var mMain = document.getElementById('main');
		var ansText = document.getElementById('ansText');
		var user = document.getElementById('user_name');
		var sumFloor = getElementsByClass('floor').length+1;
		var newNode = '<div class="floor"><aside><img src="images/headshow.jpg"><span>'+ user.innerHTML + '</span></aside><article>' + ansText.value + '</article><a class="answerThis" href="javascript:;">回复</a><span class="floorNum">' + sumFloor +'楼</span><span class="floorTime">2016-02-01</span><div class="clear"></div></div>'
		mMain.innerHTML += newNode;
		var aThis = getElementsByClass('answerThis','main');
		for(var i = 0,l = aThis.length;i < l;i++){
			aThis[i].onclick = rThis;
		}
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
		val = target.nextSibling.nextSibling.innerHTML;
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
