  $(document).ready(function(){   
    var flag=false;
    var scroll;

    $(window).scroll(function(){
    	scroll = $(window).scrollTop();

    	if(scroll > 200){
    		if(!flag){
    			$("#logo").css({"margin-top": "-5px", "width": "50px", "heigth": "50px"})
    			$("header").css({"background-color": "#3C3C3C"})
    			flag = true;
    		}
    	}else{
    		if(flag){
    			$("#logo").css({"margin-top": "150px", "width": "250px", "heigth": "250px"})
    			$("header").css({"background-color": "transparent"})
    			flag = false;
    		}
    	}
    })
  });

