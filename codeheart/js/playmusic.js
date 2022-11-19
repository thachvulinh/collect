$(function(){
	var imageTracker = 'playImage';
	//set events handlers for on click
	$("#swapImage").click(function(){
		swapImage();
		playPause();
	});
	$("#stopImage").click(function(){
		stop();
	});
	$("#nextImage").click(function(){
		forward();
	});
	$("#backImage").click(function(){
		backward();
	});
	//hadlers
	 var swapImage = function() {
	  var image = document.getElementById('swapImage');
	  if (imageTracker == 'playImage') {
		image.src = 'http://findicons.com/files/icons/129/soft_scraps/256/button_pause_01.png';
		imageTracker = 'stopImage';
	  } else {
		image.src = 'http://findicons.com/files/icons/129/soft_scraps/256/button_play_01.png';
		imageTracker = 'playImage';
	  }
	};

	//playing flag 
	var musicTracker = 'noMusic';
	//playlist audios
	var audios = [];
	 $(".song").each(function(){
			var load = new  Audio($(this).attr("url"));
		load.load();
		load.addEventListener('ended',function(){
		   forward();
		});
		audios.push(load);
	 });
	//active track
	var activeTrack = 0;

		
	var playPause = function() {
	  if (musicTracker == 'noMusic') {
		audios[activeTrack].play();
		musicTracker = 'playMusic';
	  } else {
		audios[activeTrack].pause();
		musicTracker = 'noMusic';
	  }
	  showPlaying();
	};

	var stop = function() {
	  if (musicTracker == 'playMusic') {
		 audios[activeTrack].pause();
			 audios[activeTrack].currentTime = 0;
		 audios[activeTrack].play();
	  } else {
		audios[activeTrack].currentTime = 0;
	  }
	};

	var forward = function(){
	  function increment(){
		 if (activeTrack < audios.length - 1)
				activeTrack++;
		 else activeTrack = 0;
	  }
		if (musicTracker == 'playMusic') {
		 audios[activeTrack].pause();
			 //audios[activeTrack].currentTime = 0;
		 increment();
		 audios[activeTrack].play();
	  } else {
		increment();
	  }
	  showPlaying();
	};

	var backward = function(){
	  function decrement(){
		 if (activeTrack > 0)
				activeTrack--;
		 else activeTrack = audios.length -1;
	  }
		if (musicTracker == 'playMusic') {
		 audios[activeTrack].pause();
			 //audios[activeTrack].currentTime = 0;
		 decrement();
		 audios[activeTrack].play();
	  } else {
		decrement();
	  }
	  showPlaying();
	};

	var showPlaying = function()
	{
		var src = audios[activeTrack].src;
	   $(".song").removeClass("playing");
	   $("div[url='" + src + "']").addClass("playing");
	   console.log( $("div[url='" + src + "']"));
	};
});

