import { forwardRef, useRef, useEffect, useState } from "react";
import "./info.css";
import video from "../../video/video.m4a";

function Info(props, ref) {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 314.16;
      console.log(progress);
      setProgress(progress);
    };
    video.addEventListener("timeupdate", updateProgress);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="info" ref={ref}>
      <h2 className="info__title">
        Cтудия звукозаписи <br /> в Твери{" "}
      </h2>
      <p className="info__subtitle">
        Запись вокала, сведение, мастеринг, аранжировка{" "}
      </p>
      <video className="info__video" autoPlay loop muted ref={videoRef}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="pause-button" onClick={togglePlayPause}>
        <svg className="pause-icon" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" className="progress-bg" />
          <circle
            cx="60"
            cy="60"
            r="50"
            className="progress-bar"
            strokeDasharray={`${progress} 314`}
            strokeDashoffset="0"
          />
          {isPlaying ? (
            <>
              <rect
                x="48"
                y="42"
                width="4"
                height="35"
                className="pause-icon-bar"
              />
              <rect
                x="68"
                y="42"
                width="4"
                height="35"
                className="pause-icon-bar"
              />
            </>
          ) : (
            <polygon points="50,45 75,60 50,75" className="play-icon" />
          )}
        </svg>
      </button>
    </section>
  );
}

export default forwardRef(Info);
