import "./portfolio.css";
import AudioItem from "../AudioItem/audio-item";
import august from "../../audio/august.mp3";
import saved from "../../audio/saved.mp3";
import augustCover from "../../images/covers/august.jpg";
import savedCover from "../../images/covers/saved.jpg";
import tamilaCover from "../../images/covers/tamila.jpg";
import mogilkoCover from "../../images/covers/mogilko.jpg";
import tamila from "../../audio/tamila.mp3";
import mogilko from "../../audio/mogilko.mp3";

import salvationCover from "../../images/covers/salvation.png";
import salvation from "../../audio/salvation.mp3";

import biberinCover from "../../images/covers/biberin.jpg";
import biberin from "../../audio/biberin.mp3";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio_title">Некоторые примеры наших работ</h2>
      <div className="audioitems">
        <AudioItem
          source={august}
          cover={augustCover}
          name="Дима Красоткин - Август"
        />
        <AudioItem
          source={saved}
          cover={savedCover}
          name="Yслышi ны - Безопасный и плюшевый"
        />
        <AudioItem
          source={tamila}
          cover={tamilaCover}
          name="Тамила и Денис - Выше высоток"
        />
        <AudioItem
          source={mogilko}
          cover={mogilkoCover}
          name="Linguamarina - Горы"
        />
        <AudioItem
          source={salvation}
          cover={salvationCover}
          name="Алексей Берикян - Salvation"
        />
        <AudioItem
          source={biberin}
          cover={biberinCover}
          name="Денис Биберин - Гитара и вино"
        />
      </div>
    </section>
  );
}
