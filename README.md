# StatGrid - Government Services Portal

A real-time government services portal for citizens and officials of Telangana. Monitor power, water, and infrastructure services with transparent communication between GHMC officials and citizens of Hyderabad.

## Features

- **Dual Portal System**: Separate portals for government officials and citizens
- **Real-time Updates**: Live status monitoring for power, water, and infrastructure services
- **Mock Authentication**: Prototype authentication system for demonstration
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Demo Credentials

### Government Portal

- **Email**: admin@ghmc.gov.in
- **Password**: admin123

### Public Portal

- **Email**: citizen@example.com
- **Password**: citizen123

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui, Radix UI
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── home/           # Home page components
│   ├── layout/         # Layout components
│   └── ui/             # Base UI components
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── pages/              # Page components
└── assets/             # Static assets
```

## Development

This is a prototype application with mock authentication. The application is designed to work without a backend and can be deployed to Vercel or any static hosting platform.

## License

This project is developed for the Government of Telangana.
