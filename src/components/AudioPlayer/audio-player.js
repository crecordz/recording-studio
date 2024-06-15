import { useState, useEffect, useRef } from "react";
import "./audio-player.css";

import august from "../../audio/august.mp3";
import augustCover from "../../images/covers/august.jpg";
import saved from "../../audio/saved.mp3";
import savedCover from "../../images/covers/saved.jpg";
import tamila from "../../audio/tamila.mp3";
import tamilaCover from "../../images/covers/tamila.jpg";
import mogilko from "../../audio/mogilko.mp3";
import mogilkoCover from "../../images/covers/mogilko.jpg";
import salvation from "../../audio/salvation.mp3";
import salvationCover from "../../images/covers/salvation.png";
import biberin from "../../audio/biberin.mp3";
import biberinCover from "../../images/covers/biberin.jpg";

const CardProfile = () => {
  const [index, setIndex] = useState(3);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [pause, setPause] = useState(false);
  const musicList = [
    {
      name: "Август",
      author: "Дима Красоткин",
      img: augustCover,
      audio: august,
      duration: "3:51",
    },
    {
      name: "Безопасный и плюшевый",
      author: "Yслышi ны",
      img: savedCover,
      audio: saved,
      duration: "2:24",
    },
    {
      name: "Выше высоток",
      author: "Денис и Тамила",
      img: tamilaCover,
      audio: tamila,
      duration: "2:49",
    },
    {
      name: "Горы",
      author: "Linguamarina ",
      img: mogilkoCover,
      audio: mogilko,
      duration: "3:12",
    },
    {
      name: "Salvation",
      author: "Алексей Берикян",
      img: salvationCover,
      audio: salvation,
      duration: "4:14",
    },
    {
      name: "Гитара и вино",
      author: "Денис Биберин ",
      img: biberinCover,
      audio: biberin,
      duration: "4:26",
    },
  ];
  const playerRef = useRef(null);
  const timelineRef = useRef(null);
  const playheadRef = useRef(null);
  const hoverPlayheadRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;
    const timeline = timelineRef.current;
    const playhead = playheadRef.current;
    const hoverPlayhead = hoverPlayheadRef.current;

    const changeCurrentTime = (e) => {
      const duration = player.duration;

      const playheadWidth = timeline.offsetWidth;
      const offsetWidht = timeline.offsetLeft;
      const userClickWidht = e.clientX - offsetWidht;

      const userClickWidhtInPercent = (userClickWidht * 100) / playheadWidth;

      playhead.style.width = userClickWidhtInPercent + "%";
      player.currentTime = (duration * userClickWidhtInPercent) / 100;
    };

    const hoverTimeLine = (e) => {
      const duration = player.duration;

      const playheadWidth = timeline.offsetWidth;

      const offsetWidht = timeline.offsetLeft;
      const userClickWidht = e.clientX - offsetWidht;
      const userClickWidhtInPercent = (userClickWidht * 100) / playheadWidth;

      if (userClickWidhtInPercent <= 100) {
        hoverPlayhead.style.width = userClickWidhtInPercent + "%";
      }

      const time = (duration * userClickWidhtInPercent) / 100;

      if (time >= 0 && time <= duration) {
        hoverPlayhead.dataset.content = formatTime(time);
      }
    };

    const resetTimeLine = () => {
      hoverPlayhead.style.width = 0;
    };

    const timeUpdate = () => {
      const duration = player.duration;
      const playPercent = 100 * (player.currentTime / duration);
      playhead.style.width = playPercent + "%";
      const currentTime = formatTime(parseInt(player.currentTime));
      setCurrentTime(currentTime);
    };

    player.addEventListener("timeupdate", timeUpdate, false);
    player.addEventListener("ended", nextSong, false);
    timeline.addEventListener("click", changeCurrentTime, false);
    timeline.addEventListener("mousemove", hoverTimeLine, false);
    timeline.addEventListener("mouseout", resetTimeLine, false);

    return () => {
      player.removeEventListener("timeupdate", timeUpdate);
      player.removeEventListener("ended", nextSong);
      timeline.removeEventListener("click", changeCurrentTime);
      timeline.removeEventListener("mousemove", hoverTimeLine);
      timeline.removeEventListener("mouseout", resetTimeLine);
    };
  }, [index, pause]);

  const formatTime = (currentTime) => {
    const minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    seconds = seconds >= 10 ? seconds : "0" + (seconds % 60);

    const formatTime = minutes + ":" + seconds;

    return formatTime;
  };

  const updatePlayer = () => {
    playerRef.current.load();
  };

  const nextSong = () => {
    setIndex((index + 1) % musicList.length);
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const prevSong = () => {
    setIndex((index + musicList.length - 1) % musicList.length);
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const playOrPause = () => {
    if (!pause) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
    setPause(!pause);
  };

  const clickAudio = (key) => {
    setIndex(key);
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const currentSong = musicList[index];

  return (
    <div className="card">
      <div className="current-song">
        <audio ref={playerRef}>
          <source src={currentSong.audio} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
        <div className="img-wrap">
          <img className=".card__img" src={currentSong.img} alt="Cover" />
        </div>
        <span className="song-name">{currentSong.name}</span>
        <span className="song-autor">{currentSong.author}</span>

        <div className="time">
          <div className="current-time">{currentTime}</div>
          <div className="end-time">{currentSong.duration}</div>
        </div>

        <div ref={timelineRef} id="timeline">
          <div ref={playheadRef} id="playhead"></div>
          <div
            ref={hoverPlayheadRef}
            className="hover-playhead"
            data-content="0:00"
          ></div>
        </div>

        <div className="controls">
          <button
            onClick={prevSong}
            className="prev prev-next current-btn"
          ></button>

          <button
            onClick={playOrPause}
            className={`play current-btn ${!pause ? "playrn" : "pausern"}`}
          ></button>
          <button
            onClick={nextSong}
            className="next prev-next current-btn"
          ></button>
        </div>
      </div>
      <div className="play-list">
        {musicList.map((music, key) => (
          <div
            key={key}
            onClick={() => clickAudio(key)}
            className={
              "track " +
              (index === key && !pause ? "current-audio" : "") +
              (index === key && pause ? "play-now" : "")
            }
          >
            <img className="track-img" src={music.img} alt="Track cover" />
            <div className="track-discr">
              <span className="track-name">{music.name}</span>
              <span className="track-author">{music.author}</span>
            </div>
            <span className="track-duration">
              {index === key ? currentTime : music.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProfile;
