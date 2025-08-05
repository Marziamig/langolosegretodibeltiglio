import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-terracotta">L'Angolo Segreto</h1>
            <span className="ml-2 text-sm text-sage">di Beltiglio</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-terracotta transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('camere')} className="text-gray-700 hover:text-terracotta transition-colors">
              Camere
            </button>
            <button onClick={() => scrollToSection('servizi')} className="text-gray-700 hover:text-terracotta transition-colors">
              Servizi
            </button>
            <button onClick={() => scrollToSection('territorio')} className="text-gray-700 hover:text-terracotta transition-colors">
              Territorio
            </button>
            <button onClick={() => scrollToSection('contatti')} className="text-gray-700 hover:text-terracotta transition-colors">
              Contatti
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('prenota')} 
              className="bg-terracotta text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Prenota Ora
            </button>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-terracotta transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('camere')} className="text-gray-700 hover:text-terracotta transition-colors text-left">
                Camere
              </button>
              <button onClick={() => scrollToSection('servizi')} className="text-gray-700 hover:text-terracotta transition-colors text-left">
                Servizi
              </button>
              <button onClick={() => scrollToSection('territorio')} className="text-gray-700 hover:text-terracotta transition-colors text-left">
                Territorio
              </button>
              <button onClick={() => scrollToSection('contatti')} className="text-gray-700 hover:text-terracotta transition-colors text-left">
                Contatti
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
