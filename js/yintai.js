 $(function() {
  // bananer轮播
      var bjlb=$("a",$(".bjlb")[0]);
      var imgs = $("a", $(".box")[0]);
      var wind = $(".rbdu")[0];
      var ul=$("ul",wind)[0]
      var yuan1=$("li", $(".rbdu")[0]);
      var flag= true;
      //状态初始化
      bjlb[0].style.zIndex=1;
      imgs[0].style.zIndex = 1;
      yuan1[0].style.background = "red";
      var num = 0;
      //自动轮播
      var anniu=$(".anniu")[0];
      var t=setInterval(xunh, 3000)
      //当鼠标移入到window时图片停下来，离开时继续轮播。
      wind.onmouseover = function()
       {
        clearInterval(t)
        animate(anniu,{opacity:1});
      }
      wind.onmouseout = function()
       {
        t = setInterval(xunh, 3000)
        animate(anniu,{opacity:0})
      }
      function xunh() {
        //更新图片下标
        num++;
        //判断num是否超过
        if (num == imgs.length) {
          num = 0;
        }
        //所有的图片层级下去，当前的层级调高。zIndex
        for (var i = 0; i < imgs.length; i++)
         {
           //imgs[i].style.zIndex = 0;
               animate(imgs[i],{opacity:0},function(){flag=true;});
               yuan1[i].style.background = "#eee";
               animate(bjlb[i],{opacity:0});
         }
        // imgs[num].style.zIndex = 1;
              animate(imgs[num],{opacity:1},function(){flag=true;});
              yuan1[num].style.background = "red"
              animate(bjlb[num],{opacity:1});
      } 
      function xunh1(){
        //更新图片下标
        num--;
        //判断num是否超过
        if (num < 0){num = imgs.length - 1}    
        //所有的图片层级下去，当前的层级调高。zIndex
        for (var i = 0; i < imgs.length; i++){
          // imgs[i].style.zIndex = 0;
            animate(imgs[i],{opacity:0},function(){flag=true;});
            yuan1[i].style.background = "#eee";
            animate(bjlb[i],{opacity:0});
         }
         // imgs[num].style.zIndex = 1;
               animate(imgs[num],{opacity:1},function(){flag=true;});
               yuan1[num].style.background = "red"
               animate(bjlb[num],{opacity:1});
      }
      for (var i = 0; i < yuan1.length; i++){
        yuan1[i].index = i;
        yuan1[i].onclick = function(){      
            for (var i = 0; i < imgs.length; i++){
               animate(imgs[i],{opacity:0});
               yuan1[i].style.background = "#eee";
               animate(bjlb[i],{opacity:0});
            }
               animate(imgs[this.index],{opacity:1});
               yuan1[this.index].style.background = "red"
               animate(bjlb[this.index],{opacity:1});
          num=this.index; //循环
        }
      }
      var xleft = $(".xiangl")[0];
      var xright = $(".xiangr")[0];
      // console.log(xright)
      xright.onclick = function(){
        if(flag){
        flag=false;
        xunh();
        }
      }
      xleft.onclick = function(){
        if(flag){
        flag=false;
        xunh1();
        }
      }

//header选项卡---------------------------------
    var yingc=$(".yingc")[0];
    var ulis=$("li",$(".rbanan")[0]);
    for(var i=0;i<ulis.length;i++){
      ulis[i].onmouseover=function(){
      	yingc.style.display="block";
      }
      ulis[i].onmouseout=function(){
      	yingc.style.display="none";
      }
    }
    var logo1=$(".logo1")[0];
    var logo2=$(".logo2")[0];
    var ewm=$(".ewm")[0];
    var ewm2=$(".ewm2")[0];
    hover(logo1,function(){
      ewm.style.display="block";
    },function(){
      ewm.style.display="none"
    })
    hover(logo2,function(){
      ewm2.style.display="block";
    },function(){
      ewm2.style.display="none";
    })
    var huanyi2=$(".huanyi2")[0];
    var myyt=$(".myyt")[0];
    hover(huanyi2,function(){
      myyt.style.display="block";
    },function(){
      myyt.style.display="none";
    })
//中部选项卡三个
   var tem1=$(".t");//点击
   var sjzx=$(".s"); //内容
   var sanjiao1=$(".j"); //sanjiao
   var dibottom1=$(".d");//border
   sjzx[0].style.zIndex=2;
   sanjiao1[0].style.display="block";
   dibottom1[0].style.display="block";
   for(var i=0;i<tem1.length;i++){
    tem1[i].index=i;
    tem1[i].onmouseover=function (){
      for(var i=0;i<tem1.length;i++){
        sjzx[i].style.zIndex=0;
        sanjiao1[i].style.display="none";
        dibottom1[i].style.display="none";
      }
      sjzx[this.index].style.zIndex=2;
      sanjiao1[this.index].style.display="block";
     dibottom1[this.index].style.display="block";
    }
   }
//中部两个选项卡
    var ka=$(".ka",$(".head")[0]);
    var xian=$(".xian");
    var xiaojiao=$(".wyz");
    xian[0].style.display="block";
    xiaojiao[0].style.display="block";
     for(var i=0;i<ka.length;i++){
      ka[i].index=i;
      ka[i].onmouseover=function(){
       for(var i=0;i<xiaojiao.length;i++){
         xian[i].style.display="none";
         xiaojiao[i].style.display="none";
         ka[i].id='';
       }
       xian[this.index].style.display="block";
       xiaojiao[this.index].style.display="block";
       ka[this.index].id="newb";
      }
     }

// border-------------------------
     var obj=$(".huam1")
     for(var i=0;i<obj.length;i++){
      line(obj[i]);
  }
	  function line(obj){  
			var left=$(".left")[i];
			var right=$(".right")[i];
			var bottom=$(".bottom")[i];
			var top=$(".top")[i];
			var bh=obj.offsetHeight;
			var bw=obj.offsetWidth;
			obj.onmouseover=function(){
		      animate(left,{height:bh});
		      animate(right,{height:bh});
		      animate(bottom,{width:bw});
		      animate(top,{width:bw})
			}
			obj.onmouseout=function(){
			    animate(left,{height:0});
		      animate(right,{height:0});
		      animate(bottom,{width:0});
		      animate(top,{width:0})
	      }
	    }
// 楼层文字显示------------------------------------------
       var floors=$(".floot");
       var floorArr=[];
       var flages=[];
       for(var i=0;i<floors.length;i++){
          floorArr.push(floors[i].offsetTop);
          flages.push(true);
       }
       var annius=$(".zuods")[0];
       var lis=$(".zzx",annius);       
       var dimgs=$(".dimgs");
       for(var i=0;i<dimgs.length;i++){
        dimgs[i].index=i;
        for(var j=0;j<dimgs.length;j++){
          dimgs[j].style.display="none";
        }
            lis[i].onmouseover=function(){
              dimgs[this.index].style.display="none";
            }
            lis[i].onmouseout=function(){
              dimgs[this.index].style.display="block";         
            }
      }
 //楼层点击跳转
      for(var i=0;i<lis.length;i++){
         lis[i].index=i;     
         lis[i].onclick=function(){
         var flo=floorArr[this.index];
         animate(document.documentElement,{scrollTop:flo});
         animate(document.body,{scrollTop:flo});
         }
      }
//右副导航-----------------------------------
   var floor=$(".tem")[0];
   var zuods=$(".zuods")[0];
   var zuods10=$(".zuods10")[0];
   var heights;
   if(heights==undefined){zuods.style.display="none"};
     window.onscroll=function(){
     var flagg=true;
     heights=document.documentElement.scrollTop||document.body.scrollTop;
     var ckh=document.documentElement.clientHeight;
     // var heighth=document.body.scrollTop;
     var fllors=floor.scrollTop;
     if(ckh+heights>=1800){ 
         zuods.style.display="block";               
         }else{     
          zuods.style.display="none"                   
        }
          zuods10.onclick=function(){
          animate(document.documentElement,{scrollTop:0})
        	animate(document.body,{scrollTop:0})
          }
     // var dis=$(".dimgs");
       for(var i=0;i<floors.length;i++){
          if(heights>=floors[i].offsetTop){
              for(var j=0;j<dimgs.length;j++){
                 dimgs[j].style.display="block";
                 }    
                 dimgs[i].style.display="none";
               }         
           }
//按需加载
            for(var i=0;i<floorArr.length;i++){
              if(heights+ckh/2>floorArr[i]&&flages[i]){
               flages[i]=false;
              var imges=floors[i].getElementsByTagName("img");
              // console.log(imges) //四个数组的图片
              for(var j=0;j<imges.length;j++){
                imges[j].src=imges[j].getAttribute("asrc")
                }
              }
            }
       }
//无缝轮播----------------------------
       var english=$(".english");
       for(var i=0;i<english.length;i++){
        wheel(english[i])
       }
//小轮播-----------------------------------------------
    var wind1 = $(".datu");
    for(var i=0;i<=floors.length;i++){
      well(wind1[i])
    }
     function well(wind){
     var imgBox=$(".xlbbox",wind)[0];
     var imag=$("a",imgBox);
     // var imgw=parseInt(getStyle(imag[0],"width"));
     var imgw=imag[0].offsetWidth;
     imgBox.style.width=imgw*imag.length+"px";
     var index=0;
     var lis=$("li",$(".uls",wind)[0]);
      lis[0].style.background="red"
      var flag=true;
      function move(){
        index++;
        if(index==imag.length){index=0}
        animate(imgBox,{left:-index*imgw},function(){flag=true});
        for(var i=0;i<imag.length;i++){
          lis[i].style.background="";
        };
        lis[index].style.background="red";
    };
    //点击 ul li
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
      lis[i].onclick=function(){
      for(var i=0;i<imag.length;i++){
          lis[i].style.background="";
        };
          this.style.background="red";
          animate(imgBox,{left:-this.index*imgw});
          index=this.index;
      }
    }
    //左右按钮
    var left=$(".xlbl",wind)[0];
    var right=$(".xlbr",wind)[0];
    parent.onmouseover=function(){
      left.style.left=0;
      right.style.right=360+"px";
    }
    parent.onmouseout=function(){

    }
    left.onmousedown=function(e){
      e.preventDefault();
     if(flag){
     index--;
     if(index<0){index=imag.length-1};
     animate(imgBox,{left:-index*imgw},function(){flag=true});
        for(var i=0;i<imag.length;i++){
          lis[i].style.background="";
        };
        lis[index].style.background="red";
        flag=false;     
    }
    }
    right.onmousedown=function(e){
      e.preventDefault();
        if(flag){
        move();
          flag=false;  
        }
    }
  }
})

    