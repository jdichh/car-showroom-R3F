import React, { useState, useEffect } from "react";

const musicFiles = [
  "./music/music1.mp3",
  "./music/music2.mp3",
  "./music/music3.mp3",
  "./music/music4.mp3",
  "./music/music5.mp3",
  "./music/music6.mp3",
  "./music/music7.mp3",
];

const MusicPlayer = () => {
  const [currentMusicIndex, setCurrentMusicIndex] = useState(
    Math.floor(Math.random() * musicFiles.length)
  );
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [volume, setVolume] = useState(0.1);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const newAudio = new Audio();
    newAudio.src = musicFiles[currentMusicIndex];
    newAudio.preload = "auto";
    newAudio.loop = false;
    newAudio.volume = volume;
    // newAudio.playbackRate = 3.5;

    newAudio.addEventListener("ended", playNextTrack);
    newAudio.addEventListener("error", (event) => {
      console.error("Error loading audio:", event);
    });

    setAudio(newAudio);

    return () => {
      newAudio.removeEventListener("ended", playNextTrack);
    };
  }, [currentMusicIndex]);

  useEffect(() => {
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audio) {
      if (isMusicPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [audio, isMusicPlaying]);

  function playNextTrack() {
    if (audio) {
      audio.pause();
    }

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * musicFiles.length);
    } while (newIndex === currentMusicIndex);

    setCurrentMusicIndex(newIndex);
    setIsMusicPlaying(true);
  }

  function toggleMusic() {
    if (isMusicPlaying) {
      playNextTrack();
    } else if (audio) {
      audio.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  }

  function increaseVolume() {
    if (audio && audio.volume < 1) {
      audio.volume += 0.1;
      setVolume(audio.volume);
    }
  }

  function decreaseVolume() {
    if (audio && audio.volume > 0) {
      audio.volume -= 0.1;
      setVolume(audio.volume);
    }
  }

  return (
    <div>
      <button id="music-toggle-button" onClick={toggleMusic} aria-label="Music toggle button">
        <i
          className={isMusicPlaying ? "fas fa-stop fa-sm" : "fas fa-play fa-sm"}
        ></i>
      </button>
      <button
        id="volume-up-button"
        className="fas fa-plus fa-sm"
        onClick={increaseVolume}
        aria-label="Volume up button"
      ></button>
      <button
        id="volume-down-button"
        className="fas fa-minus fa-sm"
        onClick={decreaseVolume}
        aria-label="Volume down button"
      ></button>
    </div>
  );
};

export default MusicPlayer;
