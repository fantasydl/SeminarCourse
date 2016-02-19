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
		tRows[i].onclick = function(event){
			event = event || window.event;
			var target = this.nextSibling.nextSibling;
			if(target.style.display === "block"){
				target.style.display = "none";
			}else{
				target.style.display = "block";
			}
			if(event.stopPropagation){
            	event.stopPropagation();
            }else{
            	event.cancelBubble=true;
            }
		}
	}

	var inPuts = document.getElementsByTagName('input');

	for(var i = 0,l = inPuts.length;i < l;i++){
		inPuts[i].onclick = function(event){
			event = event || window.event;
			if(event.stopPropagation){
            	event.stopPropagation();
            }else{
            	event.cancelBubble=true;
            }
		}
	} 

	var looks = getElementsByClass('choose-stu')[0].getElementsByTagName('a');

	for(var i = 0,l = looks.length;i < l;i++){
		looks[i].onclick = function(){
			var cStu = getElementsByClass('choose-stu')[0],
				sDetail = getElementsByClass('stu-detail')[0];

			cStu.style.display = "none";
			sDetail.style.display = "block";
		}
	}

	var tReturn = document.getElementById('return');

	tReturn.onclick = function(){
		var cStu = getElementsByClass('choose-stu')[0],
			sDetail = getElementsByClass('stu-detail')[0];

		cStu.style.display = "block";
		sDetail.style.display = "none";
	}
}