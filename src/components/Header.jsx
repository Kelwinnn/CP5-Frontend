import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="items-center text-cyan-600 p-4 align-middle shadow-lg flex justify-between relative">
      <div id="logo" className="flex p-4 uppercase font-bold text-2xl max-sm:px-6">
        <h1 className="text-cyan-600">MAKITA</h1>
      </div>
      
      {/* Menu Desktop/Tablet */}
      <div id="nav-bar" className="flex justify-center p-4 gap-12 font-bold uppercase text-base max-sm:hidden">
        <a href="#inicio" className="hover:text-cyan-200 transition">Inicio</a>
        <a href="#produtos" className="hover:text-cyan-200 transition">Produtos</a>
        <a href="#sobre" className="hover:text-cyan-200 transition">Sobre</a>
        <a href="#footer" className="hover:text-cyan-200 transition">Suporte</a>
      </div>

      {/* Botão Contato Desktop/Tablet */}
      <div id="contato">
        <button className="p-2 px-10 border cursor-pointer text-white rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 font-bold hover:scale-105 transition max-sm:hidden">
          contato
        </button>
      </div>

      {/* Botão Menu Mobile */}
      <div className="hidden max-sm:grid px-2">
        <button 
          onClick={toggleMenu}
          className="cursor-pointer p-4"
          aria-label="Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="size-8"
          >
            <path 
              fillRule="evenodd" 
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" 
              clipRule="evenodd" 
            />
          </svg> 
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      {isMenuOpen && (
        <div className="hidden max-sm:block absolute top-full right-0 w-64 bg-white shadow-xl rounded-lg mt-2 mr-4 z-50 border border-gray-200">
          <nav className="flex flex-col p-4">
            <a 
              href="#inicio" 
              className="py-3 px-4 text-cyan-600 hover:bg-cyan-50 rounded-lg transition font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#produtos" 
              className="py-3 px-4 text-cyan-600 hover:bg-cyan-50 rounded-lg transition font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </a>
            <a 
              href="#sobre" 
              className="py-3 px-4 text-cyan-600 hover:bg-cyan-50 rounded-lg transition font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#footer" 
              className="py-3 px-4 text-cyan-600 hover:bg-cyan-50 rounded-lg transition font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Suporte
            </a>
            <button 
              className="mt-3 p-3 text-white rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 font-bold hover:scale-105 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;