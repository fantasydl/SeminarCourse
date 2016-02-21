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
  var Lis1 = document.getElementsByTagName("li")[6],
    Lis2 = document.getElementsByTagName("li")[7],
    Sect1 = document.getElementById("students"),
    Sect2 = document.getElementById("lessons"),
    tRows = getElementsByClass('row-title','main');
    
  eventUse.addEventTo(Lis1,'click',changeCol1);
  eventUse.addEventTo(Lis2,'click',changeCol2);

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
	var dDetails = document.getElementById('students').getElementsByTagName('a');

	for(var i = 0,l = dDetails.length;i < l;i++){
		dDetails[i].onclick = function(){
			alert("详细记录：\n签到：" + "\n缺勤：");
		}
	}
}

function changeCol1(){
  var Lis1 = document.getElementsByTagName("li")[6],
    Lis2 = document.getElementsByTagName("li")[7],
    Sect1 = document.getElementById("students"),
    Sect2 = document.getElementById("lessons");
  Lis1.className = "selected";
  Lis2.className = " ";
  Sect1.style.display = "block";
  Sect2.style.display = "none";
} 

function changeCol2(){
  var Lis1 = document.getElementsByTagName("li")[6],
    Lis2 = document.getElementsByTagName("li")[7],
    Sect1 = document.getElementById("students"),
    Sect2 = document.getElementById("lessons");
  Lis2.className = "selected";
  Lis1.className = " ";
  Sect2.style.display = "block";
  Sect1.style.display = "none";
}

//封装 能力检测
var eventUse = {
  addEventTo : function(element,type,work){
    if(element.addEventListener){
      element.addEventListener(type,work,false);
    }else if(element.attachEvent){
      element.attachEvent('on' + type,work);
    }else{
      element['on' + type] = work;
    }
  },
  removeEventFrom : function(element,type,work){
    if(element.removeEventListener){
      element.removeEventListener(type,work,false);
    }else if(element.detachEvent){
      element.detachEvent('on' + type,work);
    }else{
      element['on' + type] = null;
    }
  },
  preventDefault:function(event){
    if (event.preventDefault) {
      event.preventDefault();
    }else{
      event.returnValue = false;
    };
  },
  stopPropagation:function(event){
    if(event.stopPropagation){
      event.stopPropagation();
    }else{
      event.cancelBubble = true;
    };
  }
}