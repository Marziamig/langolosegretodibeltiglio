import { MapPin, Clock, Building, Mountain, Car } from "lucide-react";
import roomImage1 from "@assets/IMG20250806095647_1757581665417.jpg";
import roomImage2 from "@assets/IMG20250806095700_1757581665418.jpg";
import roomImage3 from "@assets/IMG20250806095738_1757581665419.jpg";
import sagraImage from "@assets/Sagra_1754481678370.png";

export default function TerritoryAttractions() {
  return (
    <section id="territorio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Le Nostre Camere</h2>
          <p className="text-xl text-gray-600">Comfort e tradizione italiana per un soggiorno indimenticabile</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-cream p-6 rounded-xl">
            <img 
              src={roomImage1} 
              alt="Camera elegante con vista panoramica" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Camera con Vista</h3>
            <p className="text-gray-600">Rilassati in un ambiente elegante con vista panoramica sulle colline del Sannio</p>
          </div>

          <div className="bg-cream p-6 rounded-xl">
            <img 
              src={roomImage2} 
              alt="Camera luminosa con arredi moderni" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Comfort Moderno</h3>
            <p className="text-gray-600">Ambienti luminosi e confortevoli con tutti i servizi per il tuo benessere</p>
          </div>

          <div className="bg-cream p-6 rounded-xl">
            <img 
              src={roomImage3} 
              alt="Dettagli eleganti della camera" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Dettagli Raffinati</h3>
            <p className="text-gray-600">Ogni camera è curata nei minimi dettagli per garantire un soggiorno perfetto</p>
          </div>
        </div>

        {/* Scopri il Territorio Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Scopri il Territorio</h3>
            <p className="text-lg text-gray-600">Nel cuore del Sannio, tra storia, natura e tradizioni</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <iframe 
                src="https://maps.google.com/maps?q=41.06294444,14.74444444&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                className="rounded-2xl shadow-xl w-full h-80"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa L'Angolo Segreto di Beltiglio"
              />
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                <MapPin className="h-6 w-6 text-terracotta mr-2" />
                Posizione Strategica
              </h4>
              <p className="text-gray-600 mb-4">
                L'Angolo Segreto di Beltiglio si trova in Via Ricci SNC, nel pittoresco borgo di Beltiglio, 
                a soli 20 minuti da Benevento e perfettamente collegato con le principali attrazioni della Campania.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-terracotta mr-2" />
                  <span><strong>20 minuti</strong> da Benevento centro storico</span>
                </div>
                <div className="flex items-center">
                  <Building className="h-4 w-4 text-terracotta mr-2" />
                  <span>Vicino a <strong>Buitoni, Russo, Nestlé</strong> per viaggi business</span>
                </div>
                <div className="flex items-center">
                  <Mountain className="h-4 w-4 text-terracotta mr-2" />
                  <span>Immerso nelle <strong>colline del Sannio</strong></span>
                </div>
                <div className="flex items-center">
                  <Car className="h-4 w-4 text-terracotta mr-2" />
                  <span><strong>1 ora</strong> da Napoli e Caserta</span>
                </div>
              </div>
            </div>
          </div>

          {/* Attractions Grid - Without Cantine */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream p-6 rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="Centro storico di Benevento" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h5 className="text-xl font-bold mb-2">Benevento Storica</h5>
              <p className="text-gray-600">Scopri l'Arco di Traiano, il Teatro Romano e il ricco patrimonio storico della città sannita</p>
            </div>

            <div className="bg-cream p-6 rounded-xl">
              <img 
                src={sagraImage} 
                alt="Sagre tipiche del Beneventano con prodotti locali" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h5 className="text-xl font-bold mb-2">Sagre e Tradizioni</h5>
              <p className="text-gray-600">Immergiti nelle sagre tipiche del Beneventano e di Beltiglio. Gusta l'arrosto di maiale al forno, il baccalà preparato secondo antiche ricette e il prezioso tartufo del Sannio. Un'esperienza autentica tra sapori genuini e tradizioni secolari che rendono unico questo territorio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
