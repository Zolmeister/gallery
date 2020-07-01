for (var i=0;i<data.length;i++){
	try{
		if(isAndroid) if (data[i][1]+1>100000) continue;
		var ff="icons/"+data[i][0]+".ico";
		ii=document.createElement("img");
		ii.setAttribute("src",ff);
		var id=data[i][1]+1;
		if(isAndroid){
			ii.setAttribute("style","width:"+parseInt(1/Math.sqrt(Math.sqrt(Math.sqrt(id)))*100/2)+"px;height:"+parseInt(1/Math.sqrt(Math.sqrt(Math.sqrt(id)))*100/2)+";");
		}
		else{
			ii.setAttribute("style","width:"+parseInt(1/Math.sqrt(Math.sqrt(Math.sqrt(id)))*100)+"px;height:"+parseInt(1/Math.sqrt(Math.sqrt(Math.sqrt(id)))*100)+";");
		}
		ii.setAttribute("onerror","this.parentElement.removeChild(this);");
		document.body.appendChild(ii);
	}
	catch(e){
		
	}

}
R=0; 
x1=.01; 
y1=.005; 
x2=1.25; 
y2=.24; 
x3=1.6; 
y3=.24; 
x4=window.innerWidth/2-6; 
y4=window.innerHeight/2-4; 
x5=window.innerWidth/2-16; 
y5=window.innerHeight/2-6; 
DI=document.getElementsByTagName("img"); 
DIL=DI.length; 
function A(){
	for(i=0; i-DIL; i++){
		DI=document.getElementsByTagName("img"); 
		DIL=DI.length; 
		DIS=DI[ i ].style; 
		DIS.position='absolute'; 
		DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+"px"; 
		DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+"px";
	}
	R++;

}
window.onresize=function(){window.location.reload();}
var initInterval=setInterval('A()',33);
void(0);

var killed=false;
function kill(){
if(!killed){
var ims=document.getElementsByTagName("img");
for (var i=ims.length-1;i>=0;i--){
	try{
	ims[i].parentElement.removeChild(ims[i]);
	}
	catch(e){
	}
}
window.clearInterval(initInterval);
init();
play();
killed=true;
}
}
