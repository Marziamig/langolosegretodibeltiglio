import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingInquirySchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking inquiry endpoint
  app.post("/api/booking-inquiry", async (req, res) => {
    try {
      const validatedData = insertBookingInquirySchema.parse(req.body);
      const inquiry = await storage.createBookingInquiry(validatedData);
      
      // Here you would typically send an email notification
      console.log("New booking inquiry:", inquiry);
      
      res.json({ success: true, message: "Richiesta di prenotazione inviata con successo!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dati non validi",
          errors: error.errors 
        });
      } else {
        console.error("Booking inquiry error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Errore interno del server" 
        });
      }
    }
  });

  // Contact message endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Here you would typically send an email notification
      console.log("New contact message:", message);
      
      res.json({ success: true, message: "Messaggio inviato con successo!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dati non validi",
          errors: error.errors 
        });
      } else {
        console.error("Contact message error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Errore interno del server" 
        });
      }
    }
  });

  // Get booking inquiries (for admin)
  app.get("/api/booking-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getBookingInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Get booking inquiries error:", error);
      res.status(500).json({ message: "Errore interno del server" });
    }
  });

  // Get contact messages (for admin)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Get contact messages error:", error);
      res.status(500).json({ message: "Errore interno del server" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
