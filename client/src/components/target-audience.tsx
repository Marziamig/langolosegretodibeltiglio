import { Heart, Briefcase, Camera } from "lucide-react";

export default function TargetAudience() {
  return (
    <section className="py-20 bg-gradient-to-r from-sage to-powder">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Per Ogni Tipo di Viaggiatore</h2>
          <p className="text-xl text-white/90">Il tuo rifugio perfetto nel Sannio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-terracotta text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Coppie Romantiche</h3>
            <p className="text-gray-600 mb-6">
              Fughe romantiche tra le colline del Sannio, con cene al camino 
              e tramonti mozzafiato dalla terrazza panoramica.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Terrazza privata con vista</li>
              <li>• Camino accogliente</li>
              <li>• Atmosfera intima</li>
            </ul>
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-warm-orange text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Viaggi Business</h3>
            <p className="text-gray-600 mb-6">
              Ideale per trasferte di lavoro, vicino alle principali aziende 
              della zona e ben collegato con Benevento centro.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• WiFi ad alta velocità</li>
              <li>• Self check-in flessibile</li>
              <li>• Vicino a Buitoni, Nestlé</li>
            </ul>
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-sunflower text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Turisti Culturali</h3>
            <p className="text-gray-600 mb-6">
              Esplora il patrimonio storico del Sannio, dai siti archeologici 
              alle tradizioni enogastronomiche locali.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Vicino ai siti storici</li>
              <li>• Consigli locali personalizzati</li>
              <li>• Territorio autentico</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
