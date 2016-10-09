/* 纸上得来终觉浅，绝知此事要躬行
1.getclass     类名兼容问题 ie6~8不支持docueent.getElementsByClassName 
2.checkclass   ie6~8处理多类名的问题 
3.text         兼容 ie6~8 获取 设置内容text
4.getStyle     获取样式表的样式 兼容
5.$            获取#id .div div <div> window.onload
               元素 /^[a-zA-Z][a-zA-Z1-6]{0,9}$/   /^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/
6.getChilds    
7.trim   去掉左右两边的换行   "    #text    " /^\s+|\s+$/g
8.getFirst
9.getLast
10.getIndex(父元素,小标)；
11。getNext
12. previous 获取上一个
13. insertBefore()插入到弄个对象前面
14.insertAfter()                后面

*/
function getclass(classname,f){
      f=f||document;
	if(document.getElementsByClassName){
        return f.getElementsByClassName(classname);
	}else{
         var all=f.getElementsByTagName("*");//获取所有的标签判断类名
         var arr=[];
         for(var i=0;i<all.length;i++){
         	// 多类名的问题  checkclass() 
         	// all[i].className==classname
         	// console.log(checkclass(all[i].className,classname))
             if(checkclass(all[i].className,classname)){
             	arr.push(all[i])
             }
         }
         return arr;
	}
}
/*2、ie6~8处理多类名的问题 allclass"bb cc inner aa  ab bb"   oneclass"inner"*/
function checkclass(allclass,oneclass){
    var a=allclass.split(" ");//用空格  字符串转化为数组
    for(var i=0;i<a.length;i++){
    	if(a[i]==oneclass){
    		return true;
    	}
    } 
    return false; //循环判断一个结果
} 
// 3兼容 ie6~8 获取 设置内容text
function text(obj,val){
 if(val==undefined){
     if(obj.textContent==undefined){
        return obj.innerText;
     }
     return obj.textContent;
 }else{
    if(obj.textContent==undefined){
        return obj.innerText=val;
    }
    return obj.textContent=val;
 }
}
// 4获取样式表的样式 兼容
function getStyle(obj,attr){
    if(obj.currentStyle==undefined){
        // alert("ff")
        return getComputedStyle(obj,null)[attr];//中括号是变量
    }else{
        // alert("ie")
        return obj.currentStyle[attr];
    }
}
/*5.$函数 #div .div div
  函数的重载 参数的类型 参数的个数
  slice(下标) substr(下标)
  console.log(typeof /^[a-z][A-Z1-6]{0,9}$/) -->object*/ 
function $(selector,ange){
    if(typeof selector=="string"){
    var ange=ange||document;
        if(selector.charAt(0)=="#"){
            return ange.getElementById(selector.substr(1));
        }else if(selector.charAt(0)=="."){
            return getclass(selector.substr(1),ange);
        }else if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
            return ange.getElementsByTagName(selector);
        }else if(/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(selector)){
            return ange.createElement(selector.slice(1,-1))
        }
    }else if(typeof selector=="function"){
        window.onload=selector;
    }
}
// 6.获取子节点 去掉注释 换行 空格/^\s+|\s+$/g replace();
function getChilds(obj){
    var childs=obj.childNodes;
    var newArr=[];
    for(var i=0;i<childs.length;i++){                                         //.innerHTML
        if(!((childs[i].nodeType==8)||(childs[i].nodeType==3)&&(trim(childs[i].nodeValue)==""))){
           newArr.push(childs[i]);
        }
    }
    return newArr;
}
//7
function trim(str){
  return str.replace(/^\s+|\s+$/g,"");  //用""替换换行
}
//8.获取第一个
function getFirst(obj){
    return getChilds(obj)[0];
}
//9.获取最后一个
function getLast(obj){
    var last=getChilds(obj);
    return last[last.length-1];
}
//10. 获取任意一个 父元素 下标
function getIndex(parent,i){
    var index=getChilds(parent);
    return  index[i];
}
//11.获取下一个   
function getNext(obj){
    var next=obj.nextSibling; 
    if(!next){return}; //
    while((next.nodeType==8)||(next.nodeType==3&&(trim(next.nodeValue)==""))){
        next=next.nextSibling;
        if(!next){return false}//没有下一个是null   (null)-->false
    }
   return  next;
}
//12.获取上一个
function previous(obj){
     var next=obj.previousSibling; //可能是null
     if(!next){return};
    //while满足条件的话继续执行 不满足的话就return
    while((next.nodeType==8)||(next.nodeType==3&&(trim(next.nodeValue)==""))){
        next=next.previousSibling;
        if(!next){return}//没有下一个是null   (null)-->false
    }
   return  next;
}
//13.将对象插入到某个对象之前  父.insertBefore(要插入的,某个)
function insertBefore(obj,obj2){
    var parent=obj2.parentNode;
    return parent.insertBefore(obj,obj2);
}
//14.插入到某个对象的后面
function insertAfter(obj,obj2){
    var parent=obj2.parentNode;
    var next=getNext(obj2);
    if(next){
    return parent.insertBefore(obj,next)
    }
    return parent.appendChild(obj);
}
//15.添加多个事件 移动端用的多一点
function on(obj,ev,callback){
   if(obj.addEventListener){
     obj.addEventListener(ev,callback);
   }else{
    // obj.wyz=function(){
    //     callback.call(obj);
    // }
    obj.attachEvent("on"+ev,obj.callback);
   }
}
//16.删除事件 ie6-8的this问题
function del(obj,ev,callback){
    if(obj.removeEventListener){
        obj.removeEventListener(ev,callback);
    }else{
        obj.detachEvent("on"+ev,callback)
    }
}