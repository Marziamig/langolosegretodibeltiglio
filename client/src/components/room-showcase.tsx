import { Bed, Mountain, Wifi, Thermometer, Sun, Armchair, Bath } from "lucide-react";
import bluImage from "@assets/camera Blu_1754417456879.jpg";
import bluBagno from "@assets/bagno_1764596253809.jpeg";
import bluIntera from "@assets/blu intera_1764596253811.jpeg";
import bluAngolo from "@assets/blu_1764596253813.jpeg";
import rossaImage1 from "@assets/WhatsApp Image 2025-07-28 at 18.13.34_1754420946904.jpeg";
import rossaImage2 from "@assets/WhatsApp Image 2025-07-28 at 18.13.35 (1)_1754420946905.jpeg";
import rossaImage3 from "@assets/WhatsApp Image 2025-07-28 at 18.13.35_1754420946905.jpeg";
import rossaBagno from "@assets/bagno_1764596281512.jpeg";
import rossaLuce from "@assets/rossa luce_1764596281512.jpeg";
import rossaSpecchio from "@assets/specchio_1764596281513.jpeg";

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

        {/* Camera Blu */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
                  <Bath className="h-5 w-5 text-terracotta mr-2" />
                  <span>Bagno privato</span>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('prenota')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                data-testid="button-prenota-blu"
              >
                Prenota Camera Blu
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <img 
                src={bluIntera} 
                alt="Camera Blu vista completa con letto matrimoniale" 
                className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                data-testid="img-camera-blu-1"
              />
              <div className="grid grid-cols-2 gap-2">
                <img 
                  src={bluAngolo} 
                  alt="Camera Blu con balcone panoramico" 
                  className="rounded-xl shadow-lg w-full h-32 object-cover"
                  data-testid="img-camera-blu-2"
                />
                <img 
                  src={bluBagno} 
                  alt="Bagno privato Camera Blu" 
                  className="rounded-xl shadow-lg w-full h-32 object-cover"
                  data-testid="img-camera-blu-bagno"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Camera Rossa */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 gap-4">
              <img 
                src={rossaLuce} 
                alt="Camera Rossa con letti singoli e decorazioni floreali" 
                className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                data-testid="img-camera-rossa-1"
              />
              <div className="grid grid-cols-3 gap-2">
                <img 
                  src={rossaImage1} 
                  alt="Camera Rossa elegante e accogliente" 
                  className="rounded-xl shadow-lg w-full h-28 object-cover"
                  data-testid="img-camera-rossa-2"
                />
                <img 
                  src={rossaBagno} 
                  alt="Bagno privato Camera Rossa" 
                  className="rounded-xl shadow-lg w-full h-28 object-cover"
                  data-testid="img-camera-rossa-bagno"
                />
                <img 
                  src={rossaSpecchio} 
                  alt="Bagno Camera Rossa dettaglio specchio" 
                  className="rounded-xl shadow-lg w-full h-28 object-cover"
                  data-testid="img-camera-rossa-specchio"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                <h3 className="text-3xl font-bold text-gray-800">Camera Rossa</h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Elegante e raffinata, la Camera Rossa unisce il calore dei toni 
                terracotta alla tradizione italiana. Un ambiente intimo e sofisticato 
                che richiama i colori della terra campana e della storia del Sannio.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 text-terracotta mr-2" />
                  <span>Letti singoli o matrimoniale</span>
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
                  <Bath className="h-5 w-5 text-terracotta mr-2" />
                  <span>Bagno privato</span>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('prenota')}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors"
                data-testid="button-prenota-rossa"
              >
                Prenota Camera Rossa
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}