# CLAUDE.md - Next.js Project Guide

## Build Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Style Guidelines
- **TypeScript**: Use strict typing, prefer interfaces for objects
- **React**: Use functional components with hooks, no class components
- **Styling**: Use Tailwind CSS with `cn()` utility for class merging
- **Components**: Follow Radix UI patterns for accessible components
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Imports**: Group by: 1) React/Next 2) External libs 3) Internal modules 4) Types
- **Error Handling**: Use try/catch with proper user feedback
- **State Management**: Use React hooks (useState, useContext) for state

## Project Structure
- `app/` - Next.js app router pages and layouts
- `components/` - Reusable UI components
- `lib/` - Utility functions and shared logic
- `public/` - Static assets

## Cursor Rules
- Next.js 14+ with App Router
- TypeScript 5+, React 18+
- Consider security, accessibility, and internationalization