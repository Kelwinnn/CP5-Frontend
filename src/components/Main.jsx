import Card from "../components/Card";
import serraCircular from "../assets/serra-circular.png";
import serraCircular2 from "../assets/serra-circular-7651.png";
import esmilhadeiraP from "../assets/esmilhadeiraP.png";
import kitparafusadeira from "../assets/kit-parafusadeira.png";
import soprador from "../assets/soprador1.png";
import cafeteira from "../assets/cafeteira.png";
import fundoImg from "../assets/fundo.png";
import historia from "../assets/historia.png"

function Main() {
  return (
    <div>
      <div
        id="inicio"
        className="flex-col p-65 text-center max-lg:px-0 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${fundoImg})` }}
      >
        {/* Overlay opcional para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Conteúdo com z-index para ficar acima do overlay */}
        <div className="relative z-10">
          <h2 className="text-6xl font-bold max-sm:text-4xl max-lg:text-5xl text-white">
            Ferramentas Profissionais <br></br>
            <span className="text-cyan-400">MAKITA</span>
          </h2>
          <div className="p-20">
            <p className="flex text-2xl text-white max-lg:text-lg">
              Há mais de 100 anos desenvolvendo as melhores ferramentas
              elétricas para profissionais que exigem qualidade, durabilidade e
              performance superior.
            </p>
          </div>
          <a
            href="#produtos"
            className="inline-block p-4 bg-cyan-600 text-white rounded-xl hover:bg-cyan-500 transition cursor-pointer max-md:p-3 max-md:text-sm"
          >
            Conheça os nosso produtos
          </a>
        </div>
      </div>

      <div
        id="produtos"
        className="p-10 py-15 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        style={{ backgroundColor: "#397ca3ff" }}
      >
        {/* Exemplos de cards reutilizáveis */}
        <Card
          imagem={serraCircular2}
          title="Serra Circular EK7651H"
          description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto."
        />
        <Card
          imagem={serraCircular}
          title="Serra Circular HS7601"
          description=" escolha ideal para cortes precisos e eficientes, combinando uma potência de 1200W com a conveniência de ser compacta e de fácil manuseio."
        />
        <Card
          imagem={esmilhadeiraP}
          title="Esmerilhadeira"
          description=" é a potência e precisão compactas, ideal para desbastes e cortes em metal com excelente ergonomia."
        />
        <Card
          imagem={kitparafusadeira}
          title="Kit Parafusadeira Hp333 + Aspirador CL106FDZW 12V Completo "
          description="perfure e limpe com praticidade e eficiência, sem se preocupar com fios, graças à bateria de 12V."
        />
        <Card
          imagem={soprador}
          title="Soprador UB1103"
          description="Versatilidade e potência para soprar e aspirar, limpando com facilidade e eficiência."
        />
        <Card
          imagem={cafeteira}
          title="Cafeiteira aura infinita"
          description="O café fresco e quente que te acompanha em qualquer obra, com a conveniência da sua bateria Makita"
        />
      </div>
          {/* Coluna do Texto */}
          <div
            id="sobre"
            className="flex-col align-middle justify-center p-15"
            style={{ backgroundColor: "#446f88" }}
          >
            <h1 className="text-3xl font-bold p-10 text-center text-white">
              Sobre a MAKITA
            </h1>

            <div className="grid lg:grid-cols-2 gap-10 p-25 items-center max-lg:grid-cols-1">
              {/* Coluna da Imagem */}
              <div className="flex justify-center">
                <img
                  src={historia}
                  alt="História da Makita"
                  className="rounded-2xl shadow-2xl w-full max-w-3xl object-cover "
                />
              </div>

              {/* Coluna do Texto */}
              <div className="text-white space-y-6">
                <h2 className="text-2xl font-bold">
                  Mais de 100 Anos de Inovação
                </h2>

                <p className="text-lg leading-relaxed">
                  Fundada em <span className="font-bold">1915</span> em Nagoya,
                  Japão, a Makita começou como uma pequena oficina de reparo de
                  motores elétricos e transformadores. O fundador, Mosaburo
                  Makita, tinha uma visão clara: criar ferramentas que
                  combinassem qualidade superior com inovação tecnológica.
                </p>

                <p className="text-lg leading-relaxed">
                  Em <span className="font-bold">1958</span>, a Makita lançou
                  sua primeira plaina elétrica portátil, marcando o início de
                  sua jornada como fabricante de ferramentas elétricas
                  profissionais. Desde então, a empresa se tornou líder global
                  em ferramentas elétricas, presente em mais de 40 países.
                </p>

                <p className="text-lg leading-relaxed">
                  Hoje, a Makita é sinônimo de{" "}
                  <span className="font-bold">
                    durabilidade, desempenho e confiabilidade
                  </span>
                  . Com mais de 1.000 produtos no catálogo, incluindo a
                  revolucionária linha de ferramentas sem fio, continuamos
                  inovando para atender as necessidades dos profissionais mais
                  exigentes do mundo.
                </p>

                <div className="flex gap-4 pt-4">
                  <div className="text-center">
                    <p className="text-4xl font-bold">100+</p>
                    <p className="text-sm">Anos de História</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold">40+</p>
                    <p className="text-sm">Países</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold">1000+</p>
                    <p className="text-sm">Produtos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      
    </div>
  );
}

export default Main;
