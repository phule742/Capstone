// Takes an audio element's ID and plays it.
// Can be used as the onended attribute to play files sequentially.
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.play();
    } else {
        console.error(`Audio element with ID '${audioId}' not found.`);
    }
}