function scrollDetect(){
  var lastScroll = 0;

  window.onscroll = function() {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
	  let scrollPositon = window.pageYOffset || document.documentElement.scrollTop;
	
      if (currentScroll > 0 && lastScroll <= currentScroll){
        lastScroll = currentScroll;
		//when scrolling down
		var navbar = document.getElementById("navbar-fixed");
		if(navbar != null){
			navbar.id = "navbar-absolute";
		}
      }else{
        lastScroll = currentScroll;
		//when scrolling up
		var navbar = document.getElementById("navbar-absolute");
		if(navbar != null && scrollPositon > 0){
			navbar.id = "navbar-fixed";
			
		}
		else if(scrollPositon < 1){
			navbar = document.getElementById("navbar-fixed");
			navbar.id = "navbar-absolute";
		}
      }
  };
}


scrollDetect();