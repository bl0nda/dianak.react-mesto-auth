function InfoTooltip(props) {

  return (
    <section
      className={
        "popup popup_type_info" + (props.isOpen ? " popup_opened" : "")
      }
    >
        <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        <img src="" alt="" className="popup__icon-reg" />
        <h2 className="popup__text-reg"></h2>
        </div>
    </section>
  );
}
