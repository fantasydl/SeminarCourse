function getElementsByClass(clsName){
  var eles=[],
      elements=document.getElementsByTagName('*');

  for(var i=0,l=elements.length;i<l;i++){
    if(elements[i].className==clsName){
      eles.push(elements[i]);
    }
  }
  return eles;
}

window.onload = function(){
	var dDetails = getElementsByClass('container')[0].getElementsByTagName('a');

	for(var i = 0,l = dDetails.length;i < l;i++){
		dDetails[i].onclick = function(){
			alert("详细记录：\n签到：" + "\n缺勤：");
		}
	}
}