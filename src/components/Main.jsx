import Card from "../components/Card"
import serraCircular from "../assets/serra-circular.png"
import serraCircular2 from "../assets/serra-circular-7651.png"
import esmilhadeiraP from "../assets/esmilhadeiraP.png"
import kitparafusadeira from "../assets/kit-parafusadeira.png"
import soprador from "../assets/soprador1.png"
import cafeteira from "../assets/cafeteira.png"
function Main(){

    return(
        <>
        <div id="inicio" className="flex-col p-50 text-center max-lg:px-0">
            <h2 className="text-6xl font-bold max-sm:text-4xl max-lg:text-5xl"> Ferramentas Profissionais <br></br><span className="text-cyan-600">MAKITA</span></h2>
            <div className="p-20">
                <p className="flex text-2xl text-gray-600 max-lg:text-lg">
                    Há mais de 100 anos desenvolvendo as melhores ferramentas elétricas para profissionais 
                    que exigem qualidade, durabilidade e performance superior.
                </p>
            </div>
            <a href="#" className="p-4 bg-cyan-600 text-gray-200 rounded-xl hover:bg-cyan-500 transition cursor-pointer max-md:p-3 max-md:text-sm">Conheça os nosso produtos</a>
        </div>
        <div id="produtos" className="p-10 py-15 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Exemplos de cards reutilizáveis */}
            <Card imagem={serraCircular2} title="Serra Circular EK7651H" description="Uma ferramenta potente e compacta para cortes secos em materiais como azulejo, mármore e concreto." />
            <Card imagem={serraCircular} title="Serra Circular HS7601" description=" escolha ideal para cortes precisos e eficientes, combinando uma potência de 1200W com a conveniência de ser compacta e de fácil manuseio." />
            <Card imagem={esmilhadeiraP} title="Esmerilhadeira" description=" é a potência e precisão compactas, ideal para desbastes e cortes em metal com excelente ergonomia." />
            <Card imagem={kitparafusadeira} title="Kit Parafusadeira Hp333 + Aspirador CL106FDZW 12V Completo " description="perfure e limpe com praticidade e eficiência, sem se preocupar com fios, graças à bateria de 12V." />
            <Card imagem={soprador} title="Soprador UB1103" description="Versatilidade e potência para soprar e aspirar, limpando com facilidade e eficiência." />
            <Card imagem={cafeteira} title="Cafeiteira aura infinita" description="O café fresco e quente que te acompanha em qualquer obra, com a conveniência da sua bateria Makita" />
        </div>
        <div id="makita" className="flex-col align-middle justify-center p-15 bg-gradient-to-r from-blue-500 to-cyan-400">
            <h1 className="text-2xl font-bold p-10 text-center text-white">Por que escolher a Makita ?</h1>
            <div id="motivos" className="grid p-10 gap-6 lg:grid-cols-3">
                <Card title="100+ Anos de Experiência" description="Mais de um seculo desenvolvendo ferramentas de qualidade superior para profissionais exigentes" />
                <Card title="Tecnologia Avançada" description="Inovação constante com motores eficientes, baterias de loga duração e design ergonômico." />
                <Card title="Garantia e Suporte" description="Garantia estendida e rede de assistencia técnica especializada em todo o Brasil." />
            </div>
        </div>
        </>
    )


}

export default Main