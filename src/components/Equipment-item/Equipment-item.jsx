import "./Equipment-item.css";

function EquipmentItem({ title }) {
  return (
    <>
      <p className="equipment-title__title">{title}</p>
      <div className="equipment-title__line">
        <div className="blink"></div>
      </div>
    </>
  );
}

export default EquipmentItem;
