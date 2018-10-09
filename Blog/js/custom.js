function scrollDetect(){
  var lastScroll = 0;

  window.onscroll = function() {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
	  let scrollPositon = window.pageYOffset || document.documentElement.scrollTop;
	
      if (currentScroll > 0 && lastScroll <= currentScroll){
        lastScroll = currentScroll;
		//when scrolling down
		var navbar = document.querySelector("div.navbar-fixed");
		if(navbar != null){
			navbar.className = "navbar-absolute";
		}
      }else{
        lastScroll = currentScroll;
		//when scrolling up
		var navbar = document.querySelector("div.navbar-absolute");
		if(navbar != null && scrollPositon > 0){
			navbar.className = "navbar-fixed";
			
		}
		else if(scrollPositon < 1){
			navbar = document.querySelector("div.navbar-fixed");
			navbar.className = "navbar-absolute";
		}
      }
  };
}


scrollDetect();