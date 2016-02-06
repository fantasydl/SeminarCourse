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
	var tRows = getElementsByClass('row-title');
		
	for(var i = 0,l = tRows.length;i < l;i++){
		tRows[i].onclick = function(){
			var target = this.nextSibling.nextSibling;
			if(target.style.display === "block"){
				target.style.display = "none";
			}else{
				target.style.display = "block";
			}
		}
	}
}