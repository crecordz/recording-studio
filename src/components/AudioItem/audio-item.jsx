import "./audio-item.css";

export default function AudioItem({ source, cover, name }) {
  return (
    <div className="audioitem">
      <img src={cover} alt="обложка альбома" className="audioitem__cover" />
      <div className="audioitem__wrapper">
        <p className="audioitem__name">{name}</p>
        <audio className="audioitem__audio" controls>
          <source src={source} type="audio/mpeg" />
          Ваш браузер не поддерживает элемент аудио.
        </audio>
      </div>
    </div>
  );
}
