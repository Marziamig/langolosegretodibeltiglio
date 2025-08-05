import { MapPin, Clock, Building, Mountain, Car } from "lucide-react";

export default function TerritoryAttractions() {
  return (
    <section id="territorio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Scopri il Territorio</h2>
          <p className="text-xl text-gray-600">Nel cuore del Sannio, tra storia, natura e tradizioni</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Colline del Sannio con vigneti" 
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
              <MapPin className="h-8 w-8 text-terracotta mr-2" />
              Posizione Strategica
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              L'Angolo Segreto di Beltiglio si trova in Via Ricci SNC, nel pittoresco borgo di Beltiglio, 
              a soli 20 minuti da Benevento e perfettamente collegato con le principali attrazioni della Campania.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-terracotta mr-3" />
                <span><strong>20 minuti</strong> da Benevento centro storico</span>
              </div>
              <div className="flex items-center">
                <Building className="h-5 w-5 text-terracotta mr-3" />
                <span>Vicino a <strong>Buitoni, Russo, Nestlé</strong> per viaggi business</span>
              </div>
              <div className="flex items-center">
                <Mountain className="h-5 w-5 text-terracotta mr-3" />
                <span>Immerso nelle <strong>colline del Sannio</strong></span>
              </div>
              <div className="flex items-center">
                <Car className="h-5 w-5 text-terracotta mr-3" />
                <span><strong>1 ora</strong> da Napoli e Caserta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-cream p-6 rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
              alt="Centro storico di Benevento" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-bold mb-2">Benevento Storica</h4>
            <p className="text-gray-600">Scopri l'Arco di Traiano, il Teatro Romano e il ricco patrimonio storico della città sannita</p>
          </div>

          <div className="bg-cream p-6 rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
              alt="Cantine del Sannio" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-bold mb-2">Cantine del Sannio</h4>
            <p className="text-gray-600">Degusta i pregiati vini locali come l'Aglianico e il Falanghina nelle cantine storiche</p>
          </div>

          <div className="bg-cream p-6 rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
              alt="Tradizioni locali del Sannio" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-bold mb-2">Tradizioni Locali</h4>
            <p className="text-gray-600">Partecipa alle feste patronali e scopri l'autentica cultura campana</p>
          </div>
        </div>
      </div>
    </section>
  );
}
