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
                      na vida das pessoas! ✨
                    </p>
                  </div>
                </div>
                <div className="center-box-content">
                  <h1>Sobre</h1>
                  <p>
                    Imersa no mundo da computação desde 2016 e em constante
                    aprendizado! Atualmente focada em Desenvolvimento Web,
                    utilizando <strong>ReactJS</strong>, <strong>VueJS</strong>{" "}
                    e <strong>TypeScript</strong>. Também tenho bagagem com
                    administração de dados com <strong>SQL</strong> e sua
                    posterior análise utilizando <strong>Power BI</strong>.
                  </p>
                  <p>
                    Desde bem nova me interesso por tecnologia! hoje sou Técnica
                    em informática e futura Bacharel em Sistemas de Informação.
                  </p>
                  <p>
                    Costumava recriar algumas páginas por lazer a fim de
                    explorar o <strong>Figma</strong> e desde então venho
                    mantendo esse hobby aceso, mas agora buscando trazer designs
                    únicos e especiais para mim! 💖
                  </p>
                </div>
                <div className="right-box-content">
                  <img
                    className="travel-img"
                    src="src\assets\images\travel-1.jpg"
                  />
                </div>
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
          <div>
            <span>Aline Prasser • 2023</span>
          </div>
        </footer>
      </div>

      <section>
        <div className="right-section"></div>
      </section>
    </main>
  );
}
