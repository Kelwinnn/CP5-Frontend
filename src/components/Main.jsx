import Card from "../components/Card"

function Main(){

    return(
        <>
        <div id="inicio" className="flex-col p-35 text-center max-lg:px-0">
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
            <Card imagem title="Serra Circular EK7651H" description="Uma biblioteca para interfaces modernas." />
            <Card imagem="../assets/img3.png" title="Serra Circular 50007MG" description="Sua primeira atividade prática com React + Tailwind." />
            <Card imagem="../assets/img3.png" title="Esmerilhadeira" description="Um framework CSS utilitário poderoso." />
            <Card imagem="../assets/img3.png" title="Kit Parafusadeira DHP 484RFE" description="Sua primeira atividade prática com React + Tailwind." />
            <Card imagem="../assets/img3.png" title="Soprador UB1103" description="Sua primeira atividade prática com React + Tailwind." />
            <Card imagem="../assets/img3.png" title="Esmerilhadeira GA4530" description="Sua primeira atividade prática com React + Tailwind." />
        </div>
        <div id="makita" className="flex-col align-middle justify-center p-15 bg-gradient-to-r from-blue-600 to-cyan-500">
            <h1 className="text-2xl font-bold p-10 text-center">Por que escolher a <span className="text-cyan-300 uppercase">Makita</span> ?</h1>
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