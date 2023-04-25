function App() {
  return (
    <div className="h-screen w-screen bg-icy-white font-mukta flex justify-center items-center">
      <div className="xl:h-[700px] xl:w-[1024px] lg:h-5/6 lg:w-5/6 md:h-4/6 h-screen w-screen bg-white rounded-lg flex flex-col justify-between">
        <div className="bg-dark-green h-4 rounded-tr-lg rounded-tl-lg"></div>
        <div className="lg:p-6 flex flex-col md:flex-row justify-center text-center">
          <div className="lg:w-1/3 text-left flex  md:flex-col gap-4 px-2 py-4">
            <img
              src="/public/profile.jpg"
              className="md:w-36 mx-auto lg:mb-5 rounded-lg md:h-auto max-w-[200px] max-h-[200px] object-cover"
            />
            <div className="flex flex-col gap-3">
              <h1 className="lg:text-2xl md:text-xl text-xl font-cormorant-garamond font-bold text-black text-left">
                Olá, sou a Aline!
                <span className="text-pink px-3 text-base">ela/dela</span>
              </h1>
              <p className="text-black font-open-sans text-base leading-8 md:text-sm">
                Desenvolvedora{" "}
                <strong className="text-light-green">Front-End</strong> e{" "}
                <strong className="text-light-green">UX/UI Designer</strong> há
                cerca de três anos e encantada por realizar projetos que
                impactam positivamente na vida das pessoas! ✨
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 text-left px-2 py-4 text-black flex gap-2 flex-col md:overflow-auto">
            <h1 className="lg:text-2xl md:text-xl text-xl font-cormorant-garamond font-bold">
              Sobre
            </h1>
            <p className="font-open-sans text-base leading-8 md:text-sm py-2">
              Imersa no mundo da computação desde 2016 e em constante
              aprendizado! Atualmente focada em Desenvolvimento Web, utilizando{" "}
              <strong className="text-light-green">ReactJS</strong>,{" "}
              <strong className="text-light-green">VueJS</strong> e{" "}
              <strong className="text-light-green">TypeScript</strong>. Também
              tenho bagagem com administração de dados com{" "}
              <strong className="text-light-green">SQL</strong> e sua posterior
              análise utilizando{" "}
              <strong className="text-light-green">Power BI</strong>.
            </p>
            <p className="font-open-sans text-base leading-8 md:text-sm py-2">
              Desde bem nova me interesso por tecnologia! Hoje sou Técnica em
              Informática e futura Bacharel em Sistemas de Informação.
            </p>
            <p className="font-open-sans text-base leading-8 md:text-sm py-2">
              Costumava recriar algumas páginas por lazer a fim de explorar o{" "}
              <strong className="text-light-green">Figma</strong> e desde então
              venho mantendo esse hobby aceso, mas agora buscando trazer designs
              únicos e especiais para mim! 💖
            </p>
          </div>
          <div className="lg:w-1/3 flex items-center px-2 py-4">
            <img
              src="/public/travel-1.jpg"
              className="mx-auto rounded-lg object-cover h-auto max-w-4/6"
            />
          </div>
        </div>
        <div className="bg-white border-t border-icy-white rounded-bl-lg rounded-br-lg flex justify-center items-center h-16 gap-4">
          <a
            className="cursor-pointer text-brown px-5 py-2 hover:text-white hover:bg-brown transition-all ease-in-out duration-300"
            href="https://www.linkedin.com/in/aline-bravin-prasser/"
            target="_blank"
          >
            <button>
              {/* <LinkedinIcon /> */}
              <span className="lowercase font-semibold">LinkedIn</span>
            </button>
          </a>
          <a
            className="cursor-pointer text-brown px-5 py-2 hover:text-white hover:bg-brown transition-all ease-in-out duration-300"
            href="https://www.behance.net/alineprasser"
            target="_blank"
          >
            <button>
              {/* <BehanceIcon /> */}
              <span className="lowercase font-semibold">Behance</span>
            </button>
          </a>
          <a
            className="cursor-pointer text-brown px-5 py-2 hover:text-white hover:bg-brown transition-all ease-in-out duration-300"
            href="https://github.com/alineprasser"
            target="_blank"
          >
            <button>
              {/* <GithubIcon /> */}
              <span className="lowercase font-semibold">GitHub</span>
            </button>
          </a>
          <a
            className="cursor-pointer text-brown px-5 py-2 hover:text-white hover:bg-brown transition-all ease-in-out duration-300"
            href="https://www.instagram.com/alineprasser/"
            target="_blank"
          >
            <button>
              {/* <InstagramIcon /> */}
              <span className="lowercase font-semibold">Instagram</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
