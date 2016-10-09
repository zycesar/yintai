/*双下标轮播 index  nex  */
   function wheel(wind){
   	var duls=$(".duls",wind)[0];
	var imgs=$("ul",duls);
	var iw=parseInt(getStyle(imgs[0],"width"));
	var btn=$(".jdbtn",wind)[0];
	var left=$(".jdbtnl",btn)[0];
	var right=$(".jdbtnr",btn)[0];
	imgs[0].style.left=0;
	var index=0;
	var next2=0;
	// var t=setInterval(move,2000);
	var flag=true;
	var flag2=true;
    function move(){
        next2++;
        if(next2===imgs.length){next2=0};
        imgs[next2].style.left=iw+"px";
        animate(imgs[index],{left:-iw},function(){flag=true;});
        animate(imgs[next2],{left:0},function(){flag=true;});
        index=next2;
	};
	// wind.onmouseover=function(){
	// 	clearInterval(t)
	// }
	// wind.onmouseout=function(){
	// 	t=setInterval(move,2000)
	// };                       
	function moveL(){
		next2--;	
		if(next2<0){
			next2=imgs.length-1;
		}
        imgs[next2].style.left=-iw+"px";
        animate(imgs[index],{left:iw},function(){flag=true;});
        animate(imgs[next2],{left:0},function(){flag=true;});
        index=next2;
	};
		right.onclick=function(){
		if(flag){
	    	move();
			flag=false;
		}
		}
	    left.onclick=function(){
		if(flag){
		 flag=false;
		   moveL();	
		}
	}
	}
