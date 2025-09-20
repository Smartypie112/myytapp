var player;
var isVideoLoaded = false;
        // Load YouTube iFrame API
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Initialize YouTube Player
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                videoId: '',  // Empty video ID initially
                playerVars: { 'playsinline': 1 },
                events: {
                    'onReady': onPlayerReady
                }
            });
        }
function loadAndTogglePlayPause() {
    var videoId = localStorage.getItem("videoId");;

    if (!isVideoLoaded && videoId) {
        // If the video is not loaded, load it and start playing
        player.loadVideoById(videoId);
        isVideoLoaded = true;   // Set the flag to true after loading the video
        isPlaying = true;       // Set the state to playing after loading the video
        clearError();           // Clear any error messages
    } else if (isVideoLoaded) {
        // If the video is loaded, toggle play/pause
        togglePlayPause();
    } else {
        showError();  // Show an error if invalid input
    }
}function togglePlayPause() {
    if (isPlaying) {
        player.pauseVideo();  // Pause the video
    } else {
        player.playVideo();   // Play the video
    }
    isPlaying = !isPlaying;  // Toggle the playing state
}
var isPlaying = false;
        function onPlayerReady(event) {}
// Load Video (works for both regular and live videos)

window.addEventListener("load", function() {
    loadAndTogglePlayPause();  // Load and play the video as soon as window loads
});
document.addEventListener("click", function(e) {
      let target = e.target.closest("a"); 
      if (target && target.href.includes("youtube.com")) {
        e.preventDefault(); // Stop YouTube navigation
        alert("⚠️ YouTube is blocked on this page!");
        // Redirect somewhere else if you want
        window.location.href = "back.html";
      }
    });
