import { Mountain, Key, Car } from "lucide-react";

export default function FeaturesPreview() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-sage text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Mountain className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Vista Panoramica</h3>
            <p className="text-gray-600">Goditi la vista mozzafiato sulle colline del Sannio dalla nostra terrazza panoramica</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-powder text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Key className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Self Check-in</h3>
            <p className="text-gray-600">Arrivo autonomo e flessibile per la massima comodità durante il tuo soggiorno</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-warm-orange text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Parcheggio Interno</h3>
            <p className="text-gray-600">Parcheggio privato gratuito all'interno della proprietà per la tua tranquillità</p>
          </div>
        </div>
      </div>
    </section>
  );
}
