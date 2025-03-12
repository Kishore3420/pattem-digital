(function(){
    if($('.successmsg') && $('.successmsg').length) {
        $('.successmsg').popup({
            autoopen: false,
            horizontal: 'center'
          });
    }
  $(".fadeandscale_close").click(function(){
	$('.successmsg').popup('hide');
  });
	if($("#wpc-home-intro-video").val()=="No"){
		window.localStorage.setItem('introShown', true);
	}
	var tmp_tags='';
	var intro_video='';
	$('img').removeAttr('width').removeAttr('height');
	//--- VideoJs related logics
	/*
	if($("#wpc-home-tags").length){
		var ht_tags = $("#wpc-home-tags").val();
		intro_video = $("#wpc-home-intro").val();
		var ht_Exp = ht_tags.split(",");
		var tag_Cont = [];
		$.each(ht_Exp,function(key,val){
			var tmp_tags = {path:$("#home-src").attr("src"),title:val};
			tag_Cont.push(tmp_tags);
		});
	} */
	var intro_Cont = [];
	if(intro_video!=''){
		var intro_Cont = { path:intro_video,title: "We are in bangalore" };	
	}
	var index = 0;
	var introShown = window.localStorage.getItem('introShown');
	var introPlayed = introShown ? true : false;

  if(typeof videojs != "undefined" && $("#banner-video").length) {
    if(intro_Cont.length){
		window.videos = {
			intro: {
				path: wpcAjax.wptemplate+"/assets/video/blr-intro.mp4",
				title: "We are in bangalore"
			},
			banners:tag_Cont
		};
	}else{
		window.videos = {			
			banners:tag_Cont
		};
	}
	window.bannerVideo = videojs('banner-video',{"loop":true});
	
    //================================================================================
    // INFO: temprary code to simulate progress bar with random duration
    var interval;
    $('.hero-banner__progress-bar').css({"transform": "scale3d(0, 1,1)", "transition-duration": "0ms"});
    setTimeout(function(){
      showProgress();
    });
    
    setInterval(function(){

      (!introPlayed) ? (introPlayed = true) : ""
      window.bannerVideo.autoplay(true);
      //window.bannerVideo.pause();
      if(index == 0) {
        AOS.init({
          disable: 'mobile',
          once: 'true'
        });
      }      
      index = (index == window.videos.banners.length-1) ? 0 : index+1;
      $('.hero-banner__progress-bar').css({"transform": "scale3d(0, 1,1)", "transition-duration": "0ms"});
      // title updates
      $(".homebanner .hero-banner__content .title").removeClass('appear-from-left').addClass('fade-out');
      setTimeout(function(){
        $(".homebanner .hero-banner__content .title").text(window.videos.banners[index].title);
        $(".homebanner .hero-banner__content .title").removeClass('fade-out').addClass('appear-from-left');
        showProgress();
      }, 100);

    }, 2000);
	
	function showProgress() {
      $('.hero-banner__progress-bar').css({"transform": "scale3d(1, 1,1)", "transition-duration": "2600ms"});
    }
}
//--------------- VideoJs related logics  -----
  if($('.wrapper').hasClass('home-page')) {
    // check whether the intro has been played atleast once to the current user
    if(!introShown) {
      $('body').addClass('intro-active');
      setTimeout(function() {
       initHome();
       window.localStorage.setItem('introShown', true);
      }, 2000);
    }else {
      $('.home-page').css({'visibility': 'visible', opacity: 1}).fadeIn(100, function() {
         $('.intro__title').fadeOut();
         $('.home-page').addClass('active');
         $('body').addClass('home-active');
         $('.hero-banner').addClass('small-video')
         $('.hero-banner__video, .hero-banner').css('transition', 'none');
         $('body').removeClass('intro-active');

         // set the first video as starting video to skip intro video
         if(typeof window.bannerVideo != undefined) {
         /*
		   window.bannerVideo.src({src: window.videos.banners[index].path, type: 'video/mp4'});
           window.bannerVideo.play();
		   */
         }
         setTimeout(function() {
           AOS.init({
            disable: 'mobile',
            once: 'true'
           });
         });

      });
    }

  }else {
    AOS.init({
     disable: 'mobile',
     once: 'true'
    });
  }
  if(window.innerWidth < 768) {
    AOS.init({
     disable: 'mobile',
     once: 'true'
    });
    $('body').removeClass('intro-active');
  }

 function initHome() {
    $('body').addClass('purple-bg');
    if(typeof window.bannerVideo != "undefined")
      window.bannerVideo.play();

    $('.intro__title').fadeOut(500, function(){
    //   $('body').removeClass('intro-active');
    });

  $('.home-page').css({'visibility': 'visible', opacity: 1}).fadeIn(2000, function() {
     $('.home-page').addClass('active');
     $('body').addClass('home-active');
  });
}

if($.fn.waypoint) {
  var waypoints = $('.case__content').waypoint(function(direction) {
    if(direction == "down")
      $(this.element).find('.case__picture__reveal-bg').addClass('animate');
    },{
      offset: '35%'
    });
}
//=====================
// Header navigation
//=====================
 var scroll = $(document).scrollTop();
 var headerHeight = $('.header').outerHeight();
 var bannerHeight = $('.hero-banner').outerHeight();
 var topHeight = (headerHeight * 2);

$(window).scroll(throttle(function() {
     var scrolled = $(document).scrollTop();
     if (scrolled > (bannerHeight + headerHeight)){
       $('.header').addClass('off-canvas');
     } else {
       $('.header').removeClass('off-canvas');
     }

    if (scrolled > scroll || scrolled < (bannerHeight + headerHeight)){
      $('body').removeClass('header-fixed');
    } else if(scrolled > (bannerHeight + headerHeight)){
      $('body').addClass('header-fixed');
     }
   scroll = $(document).scrollTop();
 }, 1000));
	
	var animatevideo = document.querySelector('#animatevideo');
	if(animatevideo){
		var an_Cont = $("#_home_animation").val();
		if(an_Cont!=''){
			var animation = bodymovin.loadAnimation({
				container: animatevideo,
				renderer: 'svg',
				loop: true,
				autoplay: false,
				path: an_Cont
			});
		}
	}
	if($("#animatevideo").length){
		setTimeout(function(){
			$(".wrapper").addClass("banner-animate");
			setTimeout(function(){
				$(".wrapper").addClass("banner-animated");
				animation.play();
			}, 500);
		}, 3500); 
	}
})();
$(window).load(function(){
    $(".collapse").on("click", function() {
      $(".content").slideUp('slow');
      $(".collapse").removeClass('in');
      $(this).addClass('in');      
      if( $(this).find('.content:visible').length == 0){
        $(this).find('.content').slideDown('slow');   
      }else{
        $(this).removeClass('in');
      }      
    });
});