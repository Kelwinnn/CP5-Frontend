function Card({ imagem, title, description }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-cyan-600 transition">
            {imagem && (
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img 
                        src={imagem} 
                        alt={title} 
                        className="w-full h-full object-contain p-4"
                    />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}

export default Card