import { Flame, Wifi, Key, Car, Sprout, Leaf, ChefHat, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import img1 from "@assets/WhatsApp Image 2025-09-03 at 13.50.30_1759130146006.jpeg";
import img2 from "@assets/WhatsApp Image 2025-09-03 at 13.50.31_1759130146007.jpeg";
import img3 from "@assets/WhatsApp Image 2025-09-03 at 13.50.37_1759130146008.jpeg";
import img4 from "@assets/WhatsApp Image 2025-09-03 at 13.50.38 (1)_1759130146008.jpeg";
import img5 from "@assets/WhatsApp Image 2025-09-03 at 13.50.38 (2)_1759130146009.jpeg";
import img6 from "@assets/WhatsApp Image 2025-09-03 at 13.50.38 (4)_1759130146009.jpeg";

const kitchenImages = [img1, img2, img3, img4, img5, img6];

export default function ServicesAmenities() {
  return (
    <section id="servizi" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Servizi e Comfort</h2>
          <p className="text-xl text-gray-600">Tutto quello che serve per un soggiorno perfetto</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-sage text-white rounded-lg flex items-center justify-center mb-4">
              <Flame className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Camino</h3>
            <p className="text-gray-600">Accogliente camino per serate romantiche e rilassanti durante i mesi più freschi</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-powder text-white rounded-lg flex items-center justify-center mb-4">
              <Wifi className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">WiFi Gratuito</h3>
            <p className="text-gray-600">Connessione internet ad alta velocità in tutte le aree della struttura</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-warm-orange text-white rounded-lg flex items-center justify-center mb-4">
              <Key className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Self Check-in</h3>
            <p className="text-gray-600">Arrivo autonomo 24/7 per massima flessibilità nei tuoi orari di viaggio</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-terracotta text-white rounded-lg flex items-center justify-center mb-4">
              <Car className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Parcheggio Privato</h3>
            <p className="text-gray-600">Parcheggio interno gratuito e sicuro per tutti gli ospiti</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-sage text-white rounded-lg flex items-center justify-center mb-4">
              <Sprout className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Terrazza Panoramica</h3>
            <p className="text-gray-600">Ampia terrazza con vista mozzafiato sulle colline del Sannio</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-sunflower text-white rounded-lg flex items-center justify-center mb-4">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Natura e Silenzio</h3>
            <p className="text-gray-600">Immerso nel verde, lontano dal traffico urbano per un relax totale</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg" data-testid="amenity-shared-kitchen">
            <div className="w-12 h-12 bg-warm-orange text-white rounded-lg flex items-center justify-center mb-4">
              <ChefHat className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cucina Condivisa / Shared Kitchen</h3>
            
            {/* Preview image */}
            <div className="mb-3">
              <AspectRatio ratio={4/3} className="rounded-lg overflow-hidden">
                <img 
                  src={img1} 
                  alt="Cucina condivisa – anteprima / Shared kitchen – preview" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  data-testid="img-kitchen-preview"
                />
              </AspectRatio>
            </div>

            <p className="text-gray-600 mb-2">
              Hub di socializzazione per incontrarsi e condividere momenti insieme. 
              Social hub for meeting and sharing time together.
            </p>
            <p className="text-sm text-gray-500 mb-3">
              <strong>Orari / Hours:</strong> 7:00 - 22:00<br/>
              Rispettare lo spazio dopo l'uso - Please respect the space after use
            </p>

            {/* Photo gallery dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full" data-testid="button-view-kitchen-photos">
                  <Eye className="h-4 w-4 mr-2" />
                  Vedi tutte le foto / See all photos
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <Carousel className="w-full">
                  <CarouselContent>
                    {kitchenImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <AspectRatio ratio={4/3}>
                          <img 
                            src={image} 
                            alt={`Cucina condivisa – foto ${index + 1} / Shared kitchen – photo ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                            loading="lazy"
                            data-testid={`img-kitchen-${index + 1}`}
                          />
                        </AspectRatio>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
