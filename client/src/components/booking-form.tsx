import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Send } from "lucide-react";

const bookingFormSchema = z.object({
  name: z.string().min(2, "Il nome deve avere almeno 2 caratteri"),
  email: z.string().email("Email non valida"),
  checkIn: z.string().min(1, "Seleziona la data di arrivo"),
  checkOut: z.string().min(1, "Seleziona la data di partenza"),
  guests: z.string().min(1, "Seleziona il numero di ospiti"),
  preferredRoom: z.string().optional(),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function BookingForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      preferredRoom: "",
      message: "",
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      return apiRequest("POST", "/api/booking-inquiry", data);
    },
    onSuccess: () => {
      toast({
        title: "Richiesta inviata!",
        description: "Ti contatteremo presto per confermare la disponibilità.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Errore",
        description: error.message || "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      await bookingMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = `Ciao! Vorrei prenotare presso L'Angolo Segreto di Beltiglio. 
    
Nome: ${form.getValues('name')}
Email: ${form.getValues('email')}
Arrivo: ${form.getValues('checkIn')}
Partenza: ${form.getValues('checkOut')}
Ospiti: ${form.getValues('guests')}
Camera preferita: ${form.getValues('preferredRoom')}
    
${form.getValues('message')}`;
    
    window.open(`https://wa.me/393780930050?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="prenota" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Prenota il Tuo Soggiorno</h2>
          <p className="text-xl text-gray-600">Contattaci per disponibilità e tariffe personalizzate</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome e Cognome</FormLabel>
                      <FormControl>
                        <Input placeholder="Il tuo nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="la-tua-email@esempio.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="checkIn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data Arrivo</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="checkOut"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data Partenza</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ospiti</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleziona" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1 ospite</SelectItem>
                          <SelectItem value="2">2 ospiti</SelectItem>
                          <SelectItem value="3">3 ospiti</SelectItem>
                          <SelectItem value="4">4 ospiti</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="preferredRoom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Camera Preferita</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Nessuna preferenza" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="nessuna">Nessuna preferenza</SelectItem>
                        <SelectItem value="blu">Camera Blu</SelectItem>
                        <SelectItem value="rossa">Camera Rossa</SelectItem>
<<<<<<< HEAD
=======
                        <SelectItem value="sun">Camera Sun</SelectItem>
>>>>>>> 1a841166a252b30cb976961bfb779a2e3435881a
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Messaggio (opzionale)</FormLabel>
                    <FormControl>
                      <Textarea 
                        rows={4} 
                        placeholder="Raccontaci delle tue esigenze particolari o richieste speciali..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-terracotta hover:bg-orange-600 text-white py-4 px-6 text-lg"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
                </Button>
                
                <Button 
                  type="button"
                  onClick={openWhatsApp}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 px-6 text-lg"
                >
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
