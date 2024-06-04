import { forwardRef, useRef, useEffect, useState } from "react";
import "./info.css";
import video from "../../video/video2.m4a";
import { ClipLoader } from "react-spinners";
import { useInView } from "react-intersection-observer";

function Info(props, ref) {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 314.16;
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

  const { ref: vidRef, inView } = useInView({
    threshold: 0,
  });
  console.log(inView);
  return (
    <section className="info" ref={ref}>
      <div className="info__titles">
        <h2 className="info__title">Cтудия звукозаписи в Твери </h2>
        <p className="info__subtitle">
          Запись вокала, сведение, мастеринг, аранжировка{" "}
        </p>
      </div>
      <div ref={vidRef}>
        <video
          className={`info__video ${!inView ? "info__video_fade" : ""}`}
          autoPlay
          loop
          muted
          ref={videoRef}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
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
