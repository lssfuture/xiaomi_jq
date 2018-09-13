/*
* @Author: 我的文档
* @Date:   2018-09-03 20:33:58
* @Last Modified by:   我的文档
* @Last Modified time: 2018-09-05 11:01:53
*/
 // 图书轮播
    // let imgss=document.querySelectorAll(".hui .content .list ul li .pics .pic");
    // let dotss=document.querySelectorAll(".hui .content .list ul li .dots .dot");
    // let leftbtns=document.querySelectorAll(".hui .content .list ul li .zuo")[0];
    // let rightbtns=document.querySelectorAll(".hui .content .list ul li .you")[0];
    
    // console.log(imgss,dotss,leftbtns,rightbtns);
    // imgs[0].style.left=0;
    // 
 function lb(imgss,dotss,leftbtns,rightbtns){
 	let widthss=imgss.width();
 	dotss[0].addClass("active");
    imgss[0].css("left","0");
    let nows=0;
    let nexts=0;
    let flag=true;
     function moves() {
        nexts++;
        if (nexts==imgss.length){
            nexts=0;
        }
        imgss[nexts].css("left","widthss+'px'");
         imgss[nows].animate({left:"-widthss"});
         imgss[nexts].animate({left:"0"});
        dotss[nows].removeChild("active");
        dotss[nexts].addClass("active");
        nows=nexts;
    }
    function movesL() {
        nexts--;
        if (nexts<0){
            nexts=imgss.length-1;
        }
        imgss[nexts].css("left","-widthss+'px'");
        imgss[nows].animate({left:"widthss"});
        imgss[nexts].animate({left:"0"});
        dotss[nows].removeChild("active");
        dotss[nexts].addClass("active");
        nows=nexts;
    }
    leftbtns.click(function () {
           if (nows==0) {
            return;
        }
        movesL();
     
     })
    rightbtns.click(function () {
          if (nows==dotss.length-1) {
            return;
        }
        moves();
      
    })
     dotss.mouseenter(function () {
         let i=$(this).index();
         dotss.removeChild("active").eq(i).addClass("active");
         imgss.css("left","widthss+'px'").eq(i).css("left","0");
     })

 }

    