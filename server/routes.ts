import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Add timestamp for when the contact form was submitted
      const contactWithTimestamp = {
        ...contactData,
        createdAt: new Date().toISOString(),
      };
      
      // Save the contact submission
      const submission = await storage.createContactSubmission(contactWithTimestamp);
      
      res.status(201).json({
        message: "Contact form submitted successfully",
        submission
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "An error occurred while submitting the form" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
