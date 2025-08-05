import { Bed, Mountain, Wifi, Thermometer, Sun, Armchair } from "lucide-react";
import azzurraImage from "@assets/AZZURRA_1754417456878.jpg";
import bluImage from "@assets/camera Blu_1754417456879.jpg";

export default function RoomShowcase() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="camere" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Le Nostre Camere</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ogni camera racconta una storia di comfort e tradizione italiana, 
            arredata con cura per offrirti un'esperienza indimenticabile
          </p>
        </div>

        {/* Camera Azzurra */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={azzurraImage} 
                alt="Camera Azzurra con vista panoramica" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-400 rounded-full mr-3"></div>
                <h3 className="text-3xl font-bold text-gray-800">Camera Azzurra</h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Un rifugio di eleganza con vista sulle montagne del Sannio. 
                La Camera Azzurra combina comfort moderno e charme tradizionale italiano, 
                con dettagli raffinati e colori che richiamano il cielo campano.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 text-terracotta mr-2" />
                  <span>Letto matrimoniale</span>
                </div>
                <div className="flex items-center">
                  <Mountain className="h-5 w-5 text-terracotta mr-2" />
                  <span>Vista panoramica</span>
                </div>
                <div className="flex items-center">
                  <Wifi className="h-5 w-5 text-terracotta mr-2" />
                  <span>WiFi gratuito</span>
                </div>
                <div className="flex items-center">
                  <Thermometer className="h-5 w-5 text-terracotta mr-2" />
                  <span>Riscaldamento</span>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('prenota')}
                className="bg-powder hover:bg-blue-400 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Prenota Camera Azzurra
              </button>
            </div>
          </div>
        </div>

        {/* Camera Blu */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
                <h3 className="text-3xl font-bold text-gray-800">Camera Blu</h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Accogliente e luminosa, la Camera Blu è un'oasi di tranquillità 
                con tocchi di giallo solare che ricordano i campi di girasole campani. 
                Perfetta per chi cerca relax e comfort in un ambiente raffinato.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 text-terracotta mr-2" />
                  <span>Letto matrimoniale</span>
                </div>
                <div className="flex items-center">
                  <Sun className="h-5 w-5 text-terracotta mr-2" />
                  <span>Molto luminosa</span>
                </div>
                <div className="flex items-center">
                  <Wifi className="h-5 w-5 text-terracotta mr-2" />
                  <span>WiFi gratuito</span>
                </div>
                <div className="flex items-center">
                  <Armchair className="h-5 w-5 text-terracotta mr-2" />
                  <span>Area relax</span>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('prenota')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Prenota Camera Blu
              </button>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src={bluImage} 
                alt="Camera Blu con arredi eleganti" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
