const rexAudio = document.getElementById("rex-sound");
const kaliAudio = document.getElementById("kali-sound");
const dvdAudio = document.getElementById("dvd-sound");
const tylerAudio = document.getElementById("tyler-sound");
const danielAudio = document.getElementById("daniel-sound");

const fadeTimers = new Map();

function fadeIn(audio) {
    clearInterval(fadeTimers.get(audio));
    audio.volume = 0;
    audio.currentTime = 0;
    audio.play();

    const timer = setInterval(() => {
        if (audio.volume < 1) {
            audio.volume = Math.min(1, audio.volume + 0.05);
        } else {
            clearInterval(timer);
        }
    }, 50);

    fadeTimers.set(audio, timer);
}

function fadeOut(audio) {
    clearInterval(fadeTimers.get(audio));

    const timer = setInterval(() => {
        if (audio.volume > 0) {
            audio.volume = Math.max(0, audio.volume - 0.05);
        } else {
            clearInterval(timer);
            audio.pause();
            audio.currentTime = 0;
        }
    }, 50);

    fadeTimers.set(audio, timer);
}

document.querySelectorAll(".rex-audio").forEach(img => {
    img.addEventListener("mouseenter", () => fadeIn(rexAudio));
    img.addEventListener("mouseleave", () => fadeOut(rexAudio));
});

document.querySelectorAll(".kali-audio").forEach(img => {
    img.addEventListener("mouseenter", () => fadeIn(kaliAudio));
    img.addEventListener("mouseleave", () => fadeOut(kaliAudio));
});

document.querySelectorAll(".dvd-audio").forEach(img => {
    img.addEventListener("mouseenter", () => fadeIn(dvdAudio));
    img.addEventListener("mouseleave", () => fadeOut(dvdAudio));
});

document.querySelectorAll(".tyler-audio").forEach(img => {
    img.addEventListener("mouseenter", () => fadeIn(tylerAudio));
    img.addEventListener("mouseleave", () => fadeOut(tylerAudio));
});

document.querySelectorAll(".daniel-audio").forEach(img => {
    img.addEventListener("mouseenter", () => fadeIn(danielAudio));
    img.addEventListener("mouseleave", () => fadeOut(danielAudio));
});




