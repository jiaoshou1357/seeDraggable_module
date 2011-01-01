$(function(){
	var index=0;
	$("#content .box_list_nub ul li").click(function(){//点击出现相对应的pdf
		index=$(this).index()
		$(this).find("img").css("opacity","0.3")
		$(this).siblings("li").find("img").css("opacity","1")
		$(".box_list ul li").eq(index).css("display","block").siblings("li").css("display","none")
	})
   
	$("#content .box_list_nub ul li").hover(function(){//hover变暗
        if(index!=$(this).index()){
        	$(this).find("img").css("opacity","0.3")
        }
	},function(){
        if(index!=$(this).index()){
        	$(this).find("img").css("opacity","1")
        }
	})
})