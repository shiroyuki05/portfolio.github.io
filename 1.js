const playButton = document.getElementById('btnn');
        const videoContainer = document.getElementById('videoContainer');
        const myVideo = document.getElementById('myVideo');

        playButton.addEventListener('click', function() {
            videoContainer.style.display = 'flex'; 
            myVideo.play(); 
            myVideo.controls = false;
            myVideo.onended = function() {
                window.location.href = 'home.html';
            };
        });