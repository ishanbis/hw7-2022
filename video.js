var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay)
	console.log("Looping is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video")
	video.playbackRate *= 0.9
	console.log("Video spead is set to " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Video")
	video.playbackRate /= 0.9
	console.log("Video spead is set to " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video")
	video.currentTime += 10
	if(video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("Video current time is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video")
	if(video.muted == true){
		console.log("Unmute")
		video.muted = false
		this.innerHTML = "Mute"
	}
	else{
		console.log("Mute")
		video.muted = true
		this.innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("slider changed")
	video.volume = this.value / 100
	console.log("volume is" + this.value)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("style changed")
	if(video.getAttribute("class") == "video"){
		video.setAttribute("class", "oldSchool")
	}
});

document.querySelector("#orig").addEventListener("click", function(){
	if(video.getAttribute("class") == "oldSchool"){
		video.setAttribute("class", "video")
	}
});
