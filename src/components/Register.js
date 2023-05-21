function Login(props) {
  return (
    <main className="main">
      <form className="form-welcome">
        <h2 className="form-welcome__title"></h2>
        <label className="form-welcome__input-container">
          <input
            type="email"
            className="form-welcome__input form-welcome__input_type_email"
            name="email"
            placeholder="Email"
            required
          ></input>
        </label>
        <label className="form-welcome__input-container">
          <input
            type="password"
            className="form-welcome__input form-welcome__input_type_password"
            name="password"
            placeholder="Пароль"
            required
          ></input>
        </label>
        <button type="submit" className="form-welcome__button"></button>
        <p className="form-welcome__link-entry">Уже зарегистрированы? Войти</p>
      </form>
    </main>
  );
}
