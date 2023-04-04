import "./styles.scss";

export function Home() {
  return (
    <main className="main">
      <section>
        <div className="left-section"></div>
      </section>

      <div className="wrapper">
        <header>
          <div className="head"></div>
        </header>

        <article>
          <div className="content">
            <div className="box">
              <div className="box-header"></div>
              <div className="box-content">
                <div className="left-box-content">
                  <img
                    className="profile-img"
                    src="src\assets\images\profile.jpg"
                  />
                  <div className="left-box-content-text">
                    <h1>
                      Olá, sou a Aline!<span>ela/dela</span>
                    </h1>
                    <p>
                      Desenvolvedora <strong>Front-End</strong> e{" "}
                      <strong>UX/UI</strong> Designer há cerca de três anos e
                      encantada por realizar projetos que impactam positivamente
                      na vida das pessoas! ✨💖
                    </p>
                  </div>
                </div>
                <div className="center-box-content">center</div>
                <div className="right-box-content">right</div>
              </div>
              <div className="box-nav">
                <button className="box-nav-button">
                  <span>link</span>
                </button>
                <button className="box-nav-button">
                  <span>link</span>
                </button>
                <button className="box-nav-button">
                  <span>link</span>
                </button>
              </div>
            </div>
          </div>
        </article>

        <footer>
          <div className="footer">Aline Bravin Prasser • 2023</div>
        </footer>
      </div>

      <section>
        <div className="right-section"></div>
      </section>
    </main>
  );
}
