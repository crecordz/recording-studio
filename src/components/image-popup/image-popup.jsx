import { useRef, useEffect } from "react";
import "./image-popup.css";
function ImagePopup({ onClose, isOpen, link }) {
  const popup = useRef();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const closePopupOverlay = (e) => {
      if (e.currentTarget === e.target) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    if (popup.current) {
      popup.current.addEventListener("mousedown", closePopupOverlay);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      if (popup.current) {
        popup.current.removeEventListener("mousedown", closePopupOverlay);
      }
    };
  });
  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""}`} ref={popup}>
      <div className="popup__image-container">
        <button
          className="popup__close-icon popup__close-icon_pict"
          type="button"
          aria-label="Кнопка закрытия попапа"
          onClick={onClose}
        ></button>
        <img src={link} alt="photo" className="popup__image" />
      </div>
    </section>
  );
}

export default ImagePopup;
