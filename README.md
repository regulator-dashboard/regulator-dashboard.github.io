# 🚗 Autonomous Driving Regulator Dashboard

A comprehensive regulatory dashboard for monitoring and managing autonomous vehicle operations, built with React, TypeScript, and modern web technologies.

## 🌟 Features

- **📊 Real-time Dashboard**: Monitor key metrics including active vehicles, risk alerts, compliance rates, and takeover events
- **🚙 Vehicle Monitoring**: Track individual vehicle performance, safety metrics, and operational status
- **📋 Compliance Reports**: Generate detailed compliance reports with PDF and CSV export capabilities
- **⚠️ Risk Alerts**: Real-time risk assessment and alert management system
- **📜 Policy Management**: Manage safety policies and regulatory standards
- **⚙️ Settings**: Comprehensive configuration options for notifications, system parameters, and user preferences
- **🌙 Dark/Light Mode**: Toggle between light and dark themes
- **📱 Responsive Design**: Optimized for desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/regulator-dashboard/regulator-dashboard.github.io.git
   cd regulator-dashboard.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
regulator-dashboard/
├── src/
│   ├── app/                    # Application configuration
│   │   ├── router.tsx         # React Router configuration
│   │   └── queryClient.ts     # React Query client setup
│   ├── components/            # Reusable UI components
│   │   ├── LayoutShell.tsx    # Main layout component
│   │   └── MetricCard.tsx     # Metric display component
│   ├── features/              # Feature-based modules
│   │   ├── dashboard/         # Dashboard page
│   │   ├── monitor/           # Vehicle monitoring
│   │   ├── compliance/        # Compliance reports
│   │   ├── risk/              # Risk alerts
│   │   ├── policy/            # Policy management
│   │   └── settings/          # Settings page
│   ├── mock/                  # Mock data and API simulation
│   │   ├── browser.ts         # MSW browser setup
│   │   ├── handlers.ts        # API mock handlers
│   │   └── data.ts            # Sample data
│   ├── services/              # Business logic services
│   │   ├── csvService.ts      # CSV export functionality
│   │   └── pdfService.ts      # PDF generation
│   ├── types/                 # TypeScript type definitions
│   └── main.tsx              # Application entry point
├── public/                    # Static assets
└── dist/                     # Build output (generated)
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Deploy to GitHub Pages (requires setup)

## 🎨 Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Ant Design
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Charts**: Recharts
- **Mock API**: MSW (Mock Service Worker)
- **PDF Generation**: jsPDF
- **Styling**: CSS with Ant Design components

## 📊 Mock Data

The application includes comprehensive mock data for demonstration:
- **20+ Vehicle Records**: Realistic vehicle metrics and performance data
- **Event Logs**: Sample safety events and incidents
- **Compliance Data**: Regulatory compliance metrics and reports
- **Risk Assessments**: Various risk levels and alert scenarios

## 🌐 Deployment

### GitHub Pages (Current Setup)

The application is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: Pushes to the `master` branch trigger automatic builds
2. **GitHub Actions**: Uses custom workflow for building and deploying
3. **Live Site**: Available at `https://regulator-dashboard.github.io`

### Manual Deployment

To deploy manually:

```bash
npm run build
npm run deploy
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for local development:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_TITLE=Autonomous Driving Regulator
```

### Mock API

The application uses MSW (Mock Service Worker) for API simulation. Mock data is automatically loaded in development mode.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

**Dependencies issues**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Build errors**
```bash
# Check TypeScript errors
npx tsc --noEmit
# Run linter
npm run lint
```

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/regulator-dashboard/regulator-dashboard.github.io/issues) page
2. Create a new issue with detailed description
3. Include browser console errors and steps to reproduce

---

**Built with ❤️ for autonomous vehicle regulation and safety monitoring**
