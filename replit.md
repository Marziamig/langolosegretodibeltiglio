# L'Angolo Segreto di Beltiglio - Replit Project Guide

## Overview

This is a full-stack web application for "L'Angolo Segreto di Beltiglio", an Italian bed & breakfast located in the Sannio region of Campania. The application serves as a marketing website and booking inquiry system for this charming accommodation facility. The site showcases rooms, services, local attractions, and provides contact forms for potential guests to submit booking inquiries and general messages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom Italian countryside color scheme (terracotta, sage, powder blue, cream, sunflower)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and API interactions
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Design System**: Custom Italian-themed color palette integrated with Tailwind CSS variables

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for booking inquiries and contact messages
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request/response logging
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot module replacement via Vite integration for seamless development experience

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Production Storage**: Neon Database serverless PostgreSQL for production deployment
- **Data Models**: Three main entities - users, booking_inquiries, and contact_messages with proper relationships and constraints

### Database Schema Design
- **Users Table**: Basic authentication structure with username/password fields
- **Booking Inquiries**: Comprehensive booking request capture including guest details, dates, room preferences, and processing status
- **Contact Messages**: General contact form submissions with subject categorization and processing workflow
- **Data Validation**: Zod schemas ensuring type safety between frontend and backend with comprehensive validation rules

### Form Handling and Validation
- **Client-side Validation**: React Hook Form with Zod resolvers for immediate user feedback
- **Server-side Validation**: Matching Zod schemas on the backend to prevent invalid data submission
- **Error Handling**: Structured error responses with field-specific validation messages
- **User Experience**: Toast notifications for success/error states with Italian localization

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Connection**: Environment-based database URL configuration with automatic connection pooling

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment including runtime error overlay and cartographer for enhanced debugging
- **Development Banner**: Replit development banner for environment identification

### Core Frontend Libraries
- **React Ecosystem**: React DOM, React Hook Form, TanStack React Query for modern React patterns
- **UI Framework**: Comprehensive Radix UI component suite for accessible, unstyled UI primitives
- **Styling**: Tailwind CSS with PostCSS processing and Autoprefixer for cross-browser compatibility
- **Utilities**: class-variance-authority for component variants, clsx for conditional styling, date-fns for date manipulation

### Backend Dependencies
- **Express Framework**: Core web framework with essential middleware
- **Database**: Drizzle ORM with PostgreSQL driver and Zod schema validation
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Session Management**: connect-pg-simple for PostgreSQL session storage (configured but not actively used)

### Build and Development
- **Build Tool**: Vite with React plugin for fast development and optimized production builds
- **TypeScript**: Full TypeScript support with strict configuration and path mapping
- **Module System**: ES modules with modern JavaScript features and bundler module resolution