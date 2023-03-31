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
                <div className="left-box-content">left</div>
                <div className="center-box-content">center</div>
                <div className="right-box-content">right</div>
              </div>
              <div className="box-nav">nav</div>
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
