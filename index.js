$(function(){
    $('.title-nav').find('button').on('click',function(){
        if(!$('.title-nav').find('ul').hasClass('show')){
            console.log('1')
            $('.title-nav').find('ul').addClass('show');
        }else{
            $('.title-nav').find('ul').removeClass('show');
        }
    })

var pic = document.querySelector('.banner');
var picUl = document.querySelector('.banner ul');
var picLis = picUl.children;
var cn = 0;

var head = picUl.firstElementChild.cloneNode(true);	//复制第一个子元素
picUl.appendChild(head);
picUl.style.width = picLis.length * 100 + 'vw';

function move() {
	picUl.style.transition = 'left .5s';
	picUl.style.left = -cn * 100 + 'vw';
}
picUl.addEventListener('transitionend',function(){
	if(cn==picLis.length-1){
		picUl.style.left=0;
		picUl.style.transition='';

		cn=0;
	}
});

function autoPlay() {
	cn++;
	if (cn >= picLis.length) {
		cn = 0;
	}
	move();
}
var timer = setInterval(autoPlay, 2000);
pic.onmouseenter=function(){
	clearInterval(timer);
}
pic.onmouseleave=function(){
	timer = setInterval(autoPlay, 2000);
}
})
document.addEventListener('visibilitychange',function(){
	/*
		hidden
			true	页面隐藏 
			false	页面显示 
	 */
	if(document.hidden){
		clearInterval(timer);
	}else{
		timer = setInterval(autoPlay, 2000);
	}
})