/*
* @Author: 我的文档
* @Date:   2018-09-03 17:37:13
* @Last Modified by:   我的文档
* @Last Modified time: 2018-09-13 19:14:46
*/
window.onload=function () {

// 购物车
    $(".denglu .park3").mouseenter(function() {
        $(".denglu .park3 .yc").clearQueue().slideDown();
    });
    $(".denglu .park3").mouseleave(function() {
        $(".denglu .park3 .yc").clearQueue().slideUp();
    });


// 轮播图
    let imgs=$(".banner .lunbotu .imgs img");              /*获取元素*/
    let dots=$(".banner .lunbotu .lunbodian ul li");
    let banner=$(".banner .lunbotu");
    let leftbtn=$(".leftbnt");
    let rightbtn=$(".rightbnt");
    // console.log(imgs,dots,banner,leftbtn,rightbtn);
    let now=0;
    imgs.first().css({"z-index":"10"});
    dots.first().addClass('active');
    let t=setInterval(move, 2000);
    function move(){
        now++;
        if (now==imgs.length) {
            now=0;
        }
        imgs.css("z-index","5").eq(now).css("z-index","10");
        dots.removeClass('active').eq(now).addClass('active');
    }
    function moveL(){
        now--;
        if (now==-1) {
            now=imgs.length-1;
        }
        imgs.css("z-index","5").eq(now).css("z-index","10");
        dots.removeClass('active').eq(now).addClass('active');
    }
    rightbtn.click(function() {
        move();
    });

    leftbtn.click(function() {
        moveL();
    });
    banner.mouseenter(function () {
         clearInterval(t);
     })
    banner.mouseleave(function () {
         t=setInterval(move,2000);
    })
    dots.click(function(){
        let i=$(this).index();
        dots.removeClass('active').eq(i).addClass('active');
        imgs.css("z-index","5").eq(i).css("z-index","10");
    })

// 选项卡
    let lis=$(".banner .fl .list");
    let son=$(".banner .fl .list .son img");
    lis.mouseenter(function() {
        let i=$(this).index();
        son.css("display","none").eq(i).css("display","block");
     });
    lis.mouseleave(function() {
        son.css("display","none");
    });
// 配件选项卡
    let lis1=$(".box-pj .top .lis1 a");
    let son1=$(".box-pj .list");
    let hx=$(".box-pj .top .lis1 a .hx");
    lis1.last().css("color","#ff6700");
    hx.last().css("background","#ff6700");
    son1.last().css("display","block");
    lis1.mouseenter(function(){
        let i=$(this).index();
        son1.css("display","none").eq(i).css("display","block");
        lis1.css("color","#676769").eq(i).css("color","#ff6700");
        hx.css("background","#F5F5F5").eq(i).css("background","#ff6700");
    });

// 平移效果
    let button=$(".box-tj .top .jt .zuo ");
    let milist=$(".box-tj .list");
    let w=milist.width()/2;
    let times=0;
    button[0].onclick=function(){
             times++;
            if (times==2) {
                times=1;
            }
            milist.css("transform",`translate(${(-w*times)}px)`);
        }
    button[1].onclick=function(){
        times--;
        if (times==-1) {
            times=0;
        }
        milist.css("transform",`translate(${(-w*times)}px)`);
        }
// 小米闪购平移效果
    let buttom1=$(".xiaomishangou .jt .zuo");
    let milist1=$(".neirong .lists");
    // console.log(buttom1,milist1);
    let w1=milist1.width()/2;
    // console.log(w1);
    let times1=0;
    buttom1[0].onclick=function(){
        times1++;
        if (times1==2) {
            times1=1;
        }
        milist1.css("transform",`translate(${(-w1*times1)}px)`);
    }
    buttom1[1].onclick=function(){
        times1--;
        if (times1==-1) {
            times1=0;
        }
        milist1.css("transform",`translate(${(-w1*times1)}px)`);
    }
// 返回顶部选项卡
    let lis2=$(".sort ul:nth-child(1) li ");
    let son2=$(".sort ul:nth-child(2) li ");
    // console.log(lis2,son2);
    lis2.mouseenter(function(){
        let i=$(this).index();
        son2.css("opacity","0").eq(i).css("opacity","1");
    })
    lis2.mouseleave(function(){
        son2.css("opacity","0");
    })
// 图书轮播
    let imgss=$(".hui .content .list ul li:nth-child(1) .pics .pic");
    let dotss=$(".hui .content .list ul li:nth-child(1) .dots .dot");
    let leftbtns=$(".hui .content .list ul li:nth-child(1) .zuo")[0];
    let rightbtns=$(".hui .content .list ul li:nth-child(1) .you")[0];
    lb(imgss,dotss,leftbtns,rightbtns);


    let img2=$(".hui .content .list ul li:nth-child(2) .pics .pic");
    let dot2=$(".hui .content .list ul li:nth-child(2) .dots .dot");
    let leftbtn2=$(".hui .content .list ul li:nth-child(2) .zuo")[0];
    let rightbtn2=$(".hui .content .list ul li:nth-child(2) .you")[0];
    lb(img2,dot2,leftbtn2,rightbtn2);


    let img3=$(".hui .content .list ul li:nth-child(3) .pics .pic");
    let dot3=$(".hui .content .list ul li:nth-child(3) .dots .dot");
    let leftbtn3=$(".hui .content .list ul li:nth-child(3) .zuo")[0];
    let rightbtn3=$(".hui .content .list ul li:nth-child(3) .you")[0];
    lb(img3,dot3,leftbtn3,rightbtn3);


    let img4=$(".hui .content .list ul li:nth-child(4) .pics .pic");
    let dot4=$(".hui .content .list ul li:nth-child(4) .dots .dot");
    let leftbtn4=$(".hui .content .list ul li:nth-child(4) .zuo")[0];
    let rightbtn4=$(".hui .content .list ul li:nth-child(4) .you")[0];
    lb(img4,dot4,leftbtn4,rightbtn4);

// 返回顶部
    let back=document.querySelectorAll(".sort ul li")[3];
    // console.log(back);
    back.onclick=function(){
        animate(document.documentElement,{scrollTop:0},600);
    }




}





	
	