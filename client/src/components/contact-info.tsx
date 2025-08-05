import { MapPin, Clock, Mail, Car, Train, Plane, Info } from "lucide-react";

export default function ContactInfo() {
  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contatti e Informazioni</h2>
          <p className="text-xl text-gray-600">Siamo qui per rendere perfetto il tuo soggiorno</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-terracotta text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Indirizzo</h4>
                  <p className="text-gray-600">
                    Via Ricci SNC<br />
                    Beltiglio, Ceppaloni (BN)<br />
                    Campania, Italia
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-sage text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">WhatsApp</h4>
                  <p className="text-gray-600">
                    +39 3XX XXX XXXX<br />
                    <span className="text-sm">Disponibile 24/7 per emergenze</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-powder text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">
                    info@angolosegretobeltiglio.it<br />
                    <span className="text-sm">Risposta entro 24 ore</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-warm-orange text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Check-in/out</h4>
                  <p className="text-gray-600">
                    Check-in: dalle 15:00<br />
                    Check-out: entro le 11:00<br />
                    <span className="text-sm">Orari flessibili su richiesta</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Come Raggiungerci</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-terracotta flex items-center">
                  <Car className="h-5 w-5 mr-2" />
                  In Auto
                </h4>
                <p className="text-gray-600 text-sm">
                  Autostrada A16 uscita Benevento, poi SS7 direzione Ceppaloni. 
                  Seguire le indicazioni per Beltiglio.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sage flex items-center">
                  <Train className="h-5 w-5 mr-2" />
                  In Treno
                </h4>
                <p className="text-gray-600 text-sm">
                  Stazione di Benevento, poi taxi o autobus locale verso Ceppaloni/Beltiglio 
                  (20 minuti circa).
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-powder flex items-center">
                  <Plane className="h-5 w-5 mr-2" />
                  In Aereo
                </h4>
                <p className="text-gray-600 text-sm">
                  Aeroporto di Napoli Capodichino (80 km), poi A16 verso Benevento. 
                  Servizio transfer su richiesta.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-sunflower/20 rounded-lg">
              <p className="text-sm text-gray-700 flex items-start">
                <Info className="h-5 w-5 text-sunflower mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Suggerimento:</strong> Contattaci prima del tuo arrivo per ricevere 
                  indicazioni dettagliate e il codice di accesso per il self check-in.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
